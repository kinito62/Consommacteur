import { ValidationError } from "sequelize";
import { House } from "../model/index.js";
import { createSchema } from "../validations/houseValidation.js";

const getHouse = async (req, res) => {
  const house = await House.findOne({
    where: { userId: req.user.id, id: req.params.houseId },
  });
  if (house) {
    res.send(house);
  } else {
    res.status(404).send({ message: "House not found." });
  }
};

const getHouses = async (req, res) => {
  const house = await House.findAll({ where: { userId: req.user.id } });
  if (house) {
    res.send(house);
  } else {
    res.status(404).send({ message: "House not found." });
  }
};

const createHouse = async (req, res) => {
  const error = createSchema.validate(req.body).error;
  if (error) return res.status(400).send(error);

  const { name } = req.body;
  const house = new House({
    name,
    userId: req.user.id,
  });

  const existingHouse = await House.findOne({
    where: { userId: req.user.id, name: name },
  });
  if (existingHouse) {
    return res.status(400).json({ message: "This house already exist" });
  }

  const savedHouse = await house.save();

  res.json(savedHouse);
};

const updateHouse = async (req, res) => {
  const error = createSchema.validate(req.body).error;
  if (error) return res.status(400).send(error);

  const { name } = req.body;
  const updatedHouse = await House.findOne({
    where: { userId: req.user.id, id: req.params.houseId },
  });
  if (!updatedHouse) {
    return res.status(404).json({ message: "This house doesn't exist" });
  }

  updatedHouse.name = name;

  await updatedHouse.save();

  res.status(200).json(updatedHouse);
};

const deleteHouse = (req, res) => {
  House.destroy({
    where: {
        userId: req.user.id,
        id: req.params.houseId,
      },
    })
    .then((deletedHouse) => {
      if (deletedHouse === 1) {
        res.status(200).json({ message: "House deleted successfully" });
      } else {
        res.status(404).json({ message: "House not found" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

export { getHouse, getHouses, createHouse, updateHouse, deleteHouse };
