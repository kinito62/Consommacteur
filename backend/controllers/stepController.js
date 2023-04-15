import { ScenarioStep } from "../model/index.js";
import { createSchema } from "../validations/stepValidation.js";

const updateStep = (req, res) => {
  res.status(503).json({ error: "Uninplemented." });

  try {
    const error = createSchema.validate(req.boby).error;
    if (error) return res.status(400).json({ error });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to update scenario step." });
  }
};

const deleteStep = async (req, res) => {
  try {
    const step = req.step;

    await step.destroy();

    res.status(200).json({ message: "Step deleted." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to delete scenario step." });
  }
};

const getStep = (req, res) => {
  try {
    res.status(200).json(req.step);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to get scenario step." });
  }
};

const createScenarioStep = async (req, res) => {
  try {
    const error = createSchema.validate(req.body).error;
    if (error) return res.status(400).json({ error });

    const scenarioId = req.scenario.id;

    const step = await ScenarioStep.create({
      scenarioId,
      ...req.body,
    });

    res.status(200).json(step);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create scenario step." });
  }
};

const getScenarioSteps = async (req, res) => {
  try {
    const scenarioId = req.scenario.id;

    const steps = await ScenarioStep.findAll({
      where: {
        scenarioId,
      },
    });

    res.status(200).json(steps);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to get scenario steps." });
  }
};

export {
  updateStep,
  deleteStep,
  getStep,
  createScenarioStep,
  getScenarioSteps,
};
