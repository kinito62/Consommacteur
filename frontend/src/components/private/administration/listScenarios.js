import React, { useEffect, useRef, useState } from 'react';
import ContainerSmall from '../../ContainerSmall';
import { ScenarioService } from '../../../services/scenario.service';
import HouseThumbnail from './housethumbnail';
import '../../../../css/administration.css';
export default function ListScenarios() {
	const [scenarios, setScenarios] = useState([]);
	const [inputError, setInputError] = useState(false);
	const nameScenario = useRef();

	useEffect(() => {
		ScenarioService.getScenarios().then(scenarios => {
			setScenarios(scenarios.data.scenarios);
		});
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		const body = {
			name: nameScenario.current.value,
		};
		ScenarioService.createScenario(body)
			.then(scenario => {
				console.log(scenario.data);
				setScenarios([...scenarios, scenario.data.scenario]);
				//setInputError(false);
			})
			.catch(error => {
				console.log(error);
				setInputError(true);
			});
	}
	function consultScenario(id) {
		console.log(id);
	}

	function deleteScenario(id) {
		ScenarioService.deleteScenario(id)
			.then(res => {
				setScenarios(scenarios.filter(scenario => scenario.id !== id));
			})
			.catch(error => {
				console.log(error);
				setInputError(true);
			});
	}

	return (
		<ContainerSmall title="Liste Scénarios">
			{scenarios.map(scenario => {
				return (
					<HouseThumbnail
						house={scenario}
						consultHouse={consultScenario}
						deleteHouse={deleteScenario}
						key={scenario.id}
					/>
				);
			})}
			<div className="addHouse">
				<form onSubmit={event => handleSubmit(event)}>
					<div className="row">
						<div className="col-25">
							<input required type="text" id="name" ref={nameScenario} />
						</div>
						<div className="col-75">
							<button type="submit">ajouter</button>
						</div>
					</div>
				</form>
				{inputError && (
					<>
						<div className="layoutInputError">
							<div className="inputError">
								<p>Ce nom de maison existe peut être déjà.</p>
							</div>
						</div>
					</>
				)}
			</div>
		</ContainerSmall>
	);
}
