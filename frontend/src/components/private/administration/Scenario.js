import { createRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScenarioService } from '../../../services/scenario.service';
import ContainerSmall from '../../ContainerSmall';
import { StepService } from '../../../services/step.service';
import ScenarioThumbnail from './ScenarioThumbnail';
import StepThumbnail from './StepThumbnail';

export default function Scenario() {
	const { scenarioId } = useParams();

	const [scenario, setScenario] = useState({});
	const [steps, setSteps] = useState([]);
	const [scenarioStatus, setScenarioStatus] = useState('arrété');

	const valueRef = createRef();
	const sensorIdRef = createRef();
	const unitRef = createRef();
	const secondDelayRef = createRef();
	const typeRef = createRef();

	useEffect(() => {
		ScenarioService.getScenario(scenarioId)
			.then(response => response.data.scenario)
			.then(scenario => {
				setScenario(scenario);

				switch (scenario.status) {
					case 'stopped':
						setScenarioStatus('arrété');
						break;
					case 'paused':
						setScenarioStatus('en pause');
						break;
					case 'started':
						setScenarioStatus('en cours');
						break;

					default:
						break;
				}

				StepService.getScenarioSteps(scenario.id)
					.then(response => response.data.steps)
					.then(steps => {
						setSteps(steps);
					});
			});
	}, []);

	const deleteStep = id => {
		StepService.deleteStep(id)
			.catch(() => {
				console.log("impossible de supprimer l'étape");
			})
			.then(() => {
				setSteps(steps.filter(step => id !== step.id));
			});
	};

	const handleSubmit = event => {
		event.preventDefault();
		const stepParams = {
			value: valueRef.current.value,
			sensorId: sensorIdRef.current.value,
			unit: unitRef.current.value,
			executionSecondDelay: secondDelayRef.current.value,
			type: typeRef.current.value,
		};

		StepService.createStep(scenarioId, stepParams)
			.catch(error => {
				console.log(error);
			})
			.then(response => response.data.step)
			.then(step => {
				setSteps([...steps, step]);
			});
	};

	return (
		<ContainerSmall title={`Scénario : ${scenario.name} (${scenarioStatus})`}>
			{steps.map((step, stepIndex) => {
				return (
					<StepThumbnail
						step={step}
						stepIndex={stepIndex + 1}
						deleteStep={deleteStep}
						key={step.id}
					/>
				);
			})}
			<div className="addHouse">
				<form onSubmit={event => handleSubmit(event)}>
					<div className="row">
						<div className="col-25">
							<label htmlFor="step-sensorId">ID sensor</label>
							<input
								required
								type="number"
								id="step-sensorId"
								placeholder="5"
								ref={valueRef}
							/>

							<label htmlFor="step-value">Valeur</label>
							<input
								required
								type="text"
								id="step-value"
								placeholder="3"
								ref={sensorIdRef}
							/>

							<label htmlFor="step-unit">Unité</label>
							<input
								required
								type="text"
								id="step-unit"
								placeholder="kwh"
								ref={unitRef}
							/>

							<label htmlFor="step-secondDelay">Délai en secondes</label>
							<input
								required
								type="number"
								id="step-secondDelay"
								placeholder="60"
								ref={secondDelayRef}
							/>

							<label htmlFor="step-type">Type de mesure</label>
							<input
								required
								type="text"
								id="step-type"
								placeholder="consumption"
								ref={typeRef}
							/>
						</div>
						<div className="col-75">
							<button type="submit">ajouter</button>
						</div>
					</div>
				</form>
			</div>
		</ContainerSmall>
	);
}
