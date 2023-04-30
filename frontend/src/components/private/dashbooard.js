import { useEffect, useState } from 'react';
import { houseService } from '../../services/house.service';
import '../../../css/places.css';
import { useNavigate, useParams } from 'react-router-dom';
import { areaService } from '../../services/area.service';
import AreaPlaceDashboard from './AreaDashboard';

export default function dashboard() {
	const [housesList, setHousesList] = useState([]);
	const [areas, setAreas] = useState([]);
	const { houseId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		async function getData() {
			if (houseId) {
				const resAreas = await areaService.getAreas(houseId);
				setAreas(resAreas.data.areas);
			}
			houseService
				.getHouses()
				.then(houses => {
					setHousesList(houses.data.houses);
				})
				.catch(error => {
					console.log(error);
				});
		}
		getData();
	}, []);

	function consultHouse(id) {
		navigate(`/conn/dashboard/${id}`);
		location.reload();
	}

	return (
		<>
			<div className="container">
				<h1 className="titleForm">Liste des Maisons</h1>
				<div className="buttonsHouses">
					{housesList.map(house => {
						let active = house.id == houseId ? 'active' : '';
						return (
							<div key={house.id}>
								<button
									id={house.id}
									onClick={() => consultHouse(house.id)}
									className={`buttonList house ${active}`}
								>
									{house.name}
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<AreaPlaceDashboard areas={areas} />
		</>
	);
}
