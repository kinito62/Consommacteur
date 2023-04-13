import { Router } from "express";
import { deleteSensor, getSensor, updateSensor } from "../controllers/sensorController.js";
import { getSensorById } from "../middlewares/sensorMiddleware.js";

const sensorRoutes = Router();
sensorRoutes.get("/:sensorId", getSensorById, getSensor);
sensorRoutes.patch("/:sensorId", getSensorById, updateSensor);
sensorRoutes.delete("/:sensorId", getSensorById, deleteSensor);

export default sensorRoutes;
