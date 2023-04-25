import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ScenarioService } from '../../../services/scenario.service';
import ContainerSmall from '../../ContainerSmall';

export default function Scenario() {
	const { scenarioId } = useParams();

    const [scenario, setScenario] = useState({});
    const [scenarioSteps, setScenarioSteps] = useState([]);

	useEffect(() => {
		ScenarioService.getScenario(scenarioId)
			.then(response => response.data.scenario)
			.then(scenario => {
				setScenario(scenario);
			});
    }, []);
    
    useEffect(() => {
		}, [scenario]);

	return (
        <ContainerSmall title={`Scénario : ${scenario.name}`}>
            
        </ContainerSmall>
	);
}
