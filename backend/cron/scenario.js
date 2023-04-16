import { and, or } from "sequelize";
import { Measurement, Scenario, ScenarioStep } from "../model/index.js";

const scenariosExecution = async () => {
  const scenarios = await Scenario.findAll({
    where: {
      status: "started",
    },
  });

  scenarios.forEach((scenario) => {
    executeScenario(scenario);
  });
};

const executeScenario = async (scenario) => {
  const scenarioId = scenario.id;
  let step = await ScenarioStep.findOne({
    where: {
      scenarioId,
      executedAt: null,
    },
  });

  if (!step) {
    step = await ScenarioStep.findOne({
      order: [["executedAt", "DESC"]],
    });
  }

  executeStep(step);
};

const executeStep = async (step) => {
  const previousStep = await step.getPreviousStep();
  let limitDate = 0;
  if (previousStep) {
    limitDate = new Date(
      new Date(previousStep.executedAt) + 1000 * step.executionSecondDelay
    );
  };
  if (Date.now() >= limitDate) {
    const { sensorId, unit, value, type } = step;

    await Measurement.create({
      sensorId,
      unit,
      value,
      type,
    });

    step.executedAt = Date.now();

    await step.save();
  }
};

export { scenariosExecution };
