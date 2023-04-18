import { ScenarioStep } from "../model/index.js";

const startScenario = async (scenario) => {
  scenario.status = "started";
  scenario.startedAt = Date.now();
  await scenario.save();
};

const pauseScenario = async (scenario) => {
  scenario.status = "paused";
  await scenario.save();
};

const stopScenario = async (scenario) => {
  scenario.status = "stopped";
  scenario.startedAt = null;

  ScenarioStep.update(
    { executedAt: null },
    { where: { scenarioId: scenario.id } }
  );
  await scenario.save();
};

export { startScenario, pauseScenario, stopScenario };
