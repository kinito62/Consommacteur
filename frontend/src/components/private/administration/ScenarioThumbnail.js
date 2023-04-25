import { NavLink } from 'react-router-dom';

const ScenarioThumbnail = ({
	scenario: { id, name, userId, updatedAt, createdAt },
	deleteScenario,
}) => (
	<div>
		<div className="col-25">
			<p>{name} : </p>
		</div>
		<div className="col-75">
			<NavLink to={`/conn/admin/scenarios/${id}`} className="buttonList">
				Consulter
			</NavLink>
			<button onClick={() => deleteScenario(id)} className="buttonList suppr">
				Supprimer
			</button>
		</div>
	</div>
);

export default ScenarioThumbnail;
