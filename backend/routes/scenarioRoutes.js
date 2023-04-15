import { Router } from "express";
import { createScenario, deleteScenario, getScenario, getScenarios, updateScenario } from "../controllers/scenarioController.js";
import { createScenarioStep, getScenarioSteps } from "../controllers/stepController.js";
import { getScenarioById } from '../middlewares/scenarioMiddleware.js';

const scenarioRoutes = Router();
scenarioRoutes.post('/', createScenario);
scenarioRoutes.patch('/:scenarioId', getScenarioById, updateScenario);
scenarioRoutes.delete('/:scenarioId', getScenarioById, deleteScenario);
scenarioRoutes.get('/:scenarioId', getScenarioById, getScenario);
scenarioRoutes.get("/", getScenarios);

const scenarioStepRoutes = Router();
scenarioStepRoutes.post('/', createScenarioStep);
scenarioStepRoutes.get('/', getScenarioSteps);
scenarioRoutes.use('/:scenarioId/steps', getScenarioById, scenarioStepRoutes);

export default scenarioRoutes;