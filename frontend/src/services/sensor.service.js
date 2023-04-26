import Axios from './caller.service';

let getSensors = id => {
	return Axios.get(`areas/${id}/sensors`);
};

let createSensor = (credentials, areaId) => {
	return Axios.post(`/areas/${areaId}/sensors`, credentials);
}

let deleteSensor = (id) => {
	return Axios.delete(`/sensors/${id}`);
}

export const sensorService = {
	getSensors,
	createSensor, 
	deleteSensor
};
