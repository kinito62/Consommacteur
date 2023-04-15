import Joi from "joi";

const createSchema = Joi.object({
  executionSecondDelay: Joi.number().positive().required(),
  unit: Joi.string().required(),
  value: Joi.number().required(),
  type: Joi.string().valid("consumption", "state").required(),
  sensorId: Joi.number().integer().required(),
});

export { createSchema };
