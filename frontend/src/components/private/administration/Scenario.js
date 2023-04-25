import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScenarioService } from '../../../services/scenario.service';
import ContainerSmall from '../../ContainerSmall';

export default function Scenario() {
	const  paramScen  = useParams();

	console.log(paramScen);

	const [scenario, setScenario] = useState({});

	useEffect(() => {
		console.log(paramScen)
		//setScenario(ScenarioService.getScenario(scenarioId)); // Supprimez 'eded' car il s'agit d'une valeur de chaîne qui ne correspond pas au format de données que vous attendez de ScenarioService.getScenario()
	}, []);

	return (
			<p>cc je suis un scenario ({scenarioId})</p>
		
	);
}
