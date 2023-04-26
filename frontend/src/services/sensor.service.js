import Axios from './caller.service';

let getSensors = id => {
	return Axios.get(`areas/${id}/sensors`);
};

export const sensorService = {
	getSensors,
};
