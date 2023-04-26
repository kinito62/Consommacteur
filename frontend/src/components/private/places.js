import { useEffect, useState } from 'react';
import { houseService } from '../../services/house.service';
import '../../../css/places.css';
import { useNavigate, useParams } from 'react-router-dom';
import { areaService } from '../../services/area.service';

export default function Places() {
	const [housesList, setHousesList] = useState([]);
	const [areas, setAreas] = useState([]);
	const { houseId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(houseId);

		if (houseId) {
			areaService.getAreas(houseId).then(resAreas => {
				console.log('areas : ', resAreas);
				setAreas(resAreas.data.areas);
			});
		}

		houseService
			.getHouses()
			.then(houses => {
				console.log(houses);
				setHousesList(houses.data.houses);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	function consultHouse(id) {
		navigate(`/conn/places/${id}`);
		location.reload();
	}

	return (
		<>
			<div className="container">
				<h1 className="titleForm">liste des Maisons</h1>
				<div className="buttonsHouses">
					{housesList.map((house, i) => {
						return (
							<div key={i}>
								<button
									onClick={() => consultHouse(house.id)}
									className="buttonList house"
								>
									{house.name}
								</button>
							</div>
						);
					})}
				</div>
			</div>
			
			<div>
            {
                
            }
            </div>
		</>
	);
}
