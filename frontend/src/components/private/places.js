import { useEffect, useState } from 'react';
import { houseService } from '../../services/house.service';
import '../../../css/places.css';
import { useNavigate, useParams } from 'react-router-dom';
import { areaService } from '../../services/area.service';
import AreaPlace from './AreaPlace';
import AreaChart from '../chart/AreaChart';
import { chartDataMaker } from '../chart/chart.dataMaker';
export default function Places() {
	const [housesList, setHousesList] = useState([]);
	const [areas, setAreas] = useState([]);
	const { houseId } = useParams();
	const [dataAllHouses, setAllDataHouses] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			const dataAllHouse = await chartDataMaker.makeDataAllHouses();
			
			setAllDataHouses(dataAllHouse);

			if (houseId) {
				areaService.getAreas(houseId).then(resAreas => {
					setAreas(resAreas.data.areas);
				});
			}

			houseService
				.getHouses()
				.then(houses => {
					setHousesList(houses.data.houses);
				})
				.catch(error => {
					console.log(error);
				});
		})();
	}, []);

	function consultHouse(id) {
		navigate(`/conn/places/${id}`);
		location.reload();
	}

	return (
		<>
			<div className="container">
				<h1 className="titleForm">Liste des Maisons</h1>
				<AreaChart data={dataAllHouses} />
				<div className="buttonsHouses">
					{housesList.map(house => {
						let active = house.id == houseId ? 'active' : '';
						return (
							<div key={house.id}>
								<button
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
			{houseId && <AreaPlace areas={areas} houseId={houseId} />}
		</>
	);
}
