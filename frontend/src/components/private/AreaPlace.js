import { useEffect, useRef, useState } from 'react';
import { sensorService } from '../../services/sensor.service';
import { createBarChart } from '../chart/initCharts';
import BarChart from '../chart/BarChat';
import { measurementService } from '../../services/measurement.service';
import { chartDataMaker } from '../chart/chart.dataMaker';

const AreaPlace = ({ areas }) => {
	const [dataSensors, setDataSensors] = useState({});
	const [dataByArea, setDataByArea] = useState({});
	const [showChart, setShowChart] = useState(null); // utilisez null à la place de false
	const barChartRef = useRef(null);

	useEffect(() => {
		//const data = await chartDataMaker.makeDataConsoAllAreasbyHouse(idHouse);
	}, []);

	async function consultSensors(id) {
		if (showChart !== id) {
			// utilisez l'ID de l'aire pour comparer
			try {
				const data = await chartDataMaker.makeDatasensors(id);
				setDataByArea(prevState => ({
					...prevState,
					[id]: data,
				}));
				console.log('dataSensors', data);
				setShowChart(id);
			} catch (error) {
				console.log(error);
			}
		} else {
			setShowChart(null);
		}
	}


	return (
		<div className="listAreas">
			{areas.map((area, i) => {
				return (
					<div key={i}>
						<div className="container">
							<h1 className="titleForm">{area.name}</h1>
							<button
								onClick={() => consultSensors(area.id)}
								className="buttonList"
							>
								{showChart !== area.id
									? 'Voir la répartition'
									: 'Cacher la répartition'}
							</button>

							{dataByArea[area.id]?.labels &&
								showChart === area.id && ( // utilisez l'ID de l'aire pour comparer
									<>
										<BarChart data={dataByArea[area.id]} />
									</>
								)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default AreaPlace;
