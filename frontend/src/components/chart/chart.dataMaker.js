import { sensorService } from '../../services/sensor.service';
import { measurementService } from '../../services/measurement.service';

let makeDataConsoAllAreasbyHouse = async id => {
    const data = await chartDataMaker.makeDatasensors(id);
    
};

let makeDatasensors = async id => {
	try {
		let sensors = [];
		let listNameSensors = [];
		let listNameConsoSensors = [];

		const res = await sensorService.getSensors(id);
		sensors.push(res.data.sensors);
		listNameSensors = res.data.sensors.map(obj => obj.name);

		for (const sensor of res.data.sensors) {
			const measurement = await measurementService.getMeasurements(sensor.id);
			const dataListmeasurement = measurement.data.measurements;
			if (dataListmeasurement.length > 0) {
				listNameConsoSensors.push(
					dataListmeasurement[dataListmeasurement.length - 1].value
				);
			} else {
				listNameConsoSensors.push(0);
			}
		}

		console.log('ooooh', {
			labels: listNameSensors,
			data: listNameConsoSensors,
		});
		return { labels: listNameSensors, data: listNameConsoSensors };
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const chartDataMaker = {
	makeDatasensors,
    makeDataConsoAllAreasbyHouse
};
