import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScenarioService } from '../../../services/scenario.service';
import ContainerSmall from '../../ContainerSmall';

export default function Scenario(props) {
	const { scenarioId } = useParams();

	console.log(scenarioId);

	const [scenario, setScenario] = useState();

	useEffect(() => {
		setScenario(ScenarioService.getScenario(scenarioId));
		console.log(scenario);
	}, []);

	return (
		<ContainerSmall>
			<div>cc je suis un scenario ({scenarioId})</div>
		</ContainerSmall>
	);
}
