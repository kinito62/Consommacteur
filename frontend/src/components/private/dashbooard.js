import '../../css/dashboard.css';
import '../../css/offers.css';

import React, { useRef, useEffect } from 'react';
import {
	createDoughnutChart,
	createBarChart,
	indicateur,
} from './chart/initCharts';

export default function ChartPage() {
	const doughnutChartRef = useRef(null);
	const barChartRef = useRef(null);
	const indicateurRef = useRef(null);

	useEffect(() => {
		createDoughnutChart(doughnutChartRef);
		createBarChart(barChartRef);
		indicateur(indicateurRef);
	}, []);

	return (
		<div className="container">
			<div>
				<h1 className="titleForm">Tableau de bord </h1>
				<h2 className="titleHome">
					Répartition de la consommation énergétique
				</h2>
				<div className="offerContainer">
					<canvas id="doughnut-chart" ref={doughnutChartRef} />
				</div>
				<h2 className="titleHome">
					Historique de la consommation énergétique par mois
				</h2>
				<div className="offerContainer">
					<canvas id="bar-chart" ref={barChartRef} />
				</div>
				<h2 className="titleHome">Indicateur de votre consommation</h2>
				<div className="offerContainer">
					<canvas id="bar-chart" ref={indicateurRef} />
				</div>
				<h2 className="titleHome">Vos accès rapides</h2>
				<div className="offerContainer"></div>
			</div>
		</div>
	);
}
