import { Scenario } from "../model/index.js";
import { createSchema } from "../validations/scenarioValidation.js";

const createScenario = async (req, res) => {
  try {
    const error = createSchema.validate(req.body).error;
    if (error) res.status(400).json(error);

    const { name } = req.body;
    const userId = req.user.id;

    const scenario = await Scenario.create({
      name,
      userId,
    });

    res.status(200).json(scenario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to create scenario." });
  }
};

const updateScenario = async (req, res) => {
  try {
    const error = createSchema.validate(req.body).error;
    if (error) res.status(400).json(error);

    const { name } = req.body;
    const scenario = req.scenario;

    scenario.name = name;

    await scenario.save();

    res.status(200).json(scenario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to update scenario." });
  }
};

const deleteScenario = async (req, res) => {
  try {
    const scenario = req.scenario;

    await scenario.destroy();

    res.status(200).json({ message: "Scenario deleted." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to delete scenario." });
  }
};

const getScenario = (req, res) => {
  try {
    const scenario = req.scenario;
    res.status(200).json(scenario);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to get scenario." });
  }
};

const getScenarios = async (req, res) => {
  try {
    const userId = req.user.id;
    const scenarios = await Scenario.findAll({
      where: {
        userId,
      },
    });

    res.status(200).json(scenarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to get scenarios." });
  }
};

export {
  createScenario,
  updateScenario,
  deleteScenario,
  getScenario,
  getScenarios,
};
