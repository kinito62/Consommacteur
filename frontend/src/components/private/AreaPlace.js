import { useEffect, useRef, useState } from 'react';
import { sensorService } from '../../services/sensor.service';
import { createBarChart } from '../chart/initCharts';
import BarChart from '../chart/BarChat';
import { measurementService } from '../../services/measurement.service';
import { chartDataMaker } from '../chart/chart.dataMaker';
import BarchartHorizontal from '../chart/barChartHorizontal';

const AreaPlace = ({ areas }) => {
	const [totalConso, setTotalConso] = useState(0);
	const [dataByArea, setDataByArea] = useState({});
	const [showChart, setShowChart] = useState(null);
	const [listConsoArea, setListConsoArea] = useState({});

	useEffect(() => {
		areas.forEach(async area => {
			const data = await ConsoArea(area.id);
			setTotalConso(prevTotalConso => prevTotalConso + data.data[0]);
			setListConsoArea(prevState => ({
				...prevState,
				[area.id]: data,
			}));
			console.log('ohoh');
		});
	}, [areas]);

	async function ConsoArea(id) {
		const res = await chartDataMaker.makeDataConsoAllArea(id);

		return res;
	}

	async function consultSensors(id) {
		if (showChart !== id) {
			try {
				const data = await chartDataMaker.makeDatasensors(id);
				setDataByArea(prevState => ({
					...prevState,
					[id]: data,
				}));
				setShowChart(id);
			} catch (error) {}
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
							{!listConsoArea[area.id] && <p>Loading...</p>}
							{listConsoArea[area.id] && (
								<BarchartHorizontal
									maxX={totalConso}
									data={listConsoArea[area.id]}
								/>
							)}
							<button
								onClick={() => consultSensors(area.id)}
								className="buttonList"
							>
								{showChart !== area.id
									? 'Voir la répartition'
									: 'Cacher la répartition'}
							</button>
							{dataByArea[area.id]?.labels && showChart === area.id && (
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
