import { Chart } from 'chart.js';
import { useEffect, useRef } from 'react';

const BarchartHorizontal = ({ data }) => {
	const canvasRef = useRef(null);
	const barChartRef = useRef(null);
	const chartRef = useRef(null); // nouvelle référence pour le graphique

	useEffect(() => {
		const dataChart = {
			labels: data.labels,
			datasets: [
				{
					label: 'sensors',
					data: data.data,
					backgroundColor: '#ffa101',
					borderColor: '#ffa101',
					borderWidth: 1,
				},
			],
		};

		const ctx = canvasRef.current.getContext('2d');
		
		if (chartRef.current) { // vérifier si un graphique précédent existe
			chartRef.current.destroy(); // détruire le graphique précédent
		}
		
		chartRef.current = new Chart(ctx, { // stocker la nouvelle référence du graphique
			type: 'bar',
			data: dataChart,
            options: {
                indexAxis: 'y',
                responsive: true,
				maintainAspectRatio: false,
                elements: {
                  bar: {
                    borderWidth: 2,
                  }
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: 'right',
                  },
                  title: {
					display: true,
					text: 'Consommation énergétique par mois',
				  },
                }
            },
		});
	}, [data]);

	return (
        <div className='barChart'>
            <canvas id="bar-chart" ref={canvasRef} />
        </div>
    );
};

export default BarchartHorizontal;
