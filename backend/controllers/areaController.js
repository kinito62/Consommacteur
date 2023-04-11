import { Area } from "../model/index.js";
import { createSchema } from "../validations/areaValidation.js";

const getHouseArea = async (req, res) => {
  try {
    const area = await Area.findOne({ where: { houseId: req.house.id, id: req.params.areaId } });
    if (area) {
      res.status(200).send(area);
    } else {
      res.status(404).send('Area not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const getHouseAreas = async (req, res) => {
  try {
    const areas = await Area.findAll({ where: { houseId: req.house.id } });
    res.status(200).send(areas);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const createHouseArea = async (req, res) => {
  const error = createSchema.validate(req.body).error;
  if (error) return res.status(400).send(error);

  const { name } = req.body;
  const area = new Area({
    name,
    houseId: req.house.id,
  });

  const existingArea = await Area.findOne({
    where: { houseId: req.house.id, name: name },
  });
  if (existingArea) {
    return res.status(400).json({ message: "This area already exist" });
  }

  const savedArea = await area.save();

  res.json(savedArea);
};

const updateHouseArea = async (req, res) => {
  const error = createSchema.validate(req.body).error;
  if (error) return res.status(400).send(error);
  const { name } = req.body;

  try {
    const area = await Area.findOne({
      where: { houseId: req.house.id, id: req.params.areaId },
    });
    if (area) {
      area.name = name;

      await area.save();

      res.status(200).send(area);
    } else {
      res.status(404).send("Area not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const deleteHouseArea = (req, res) => {
  Area.destroy({
    where: {
      id: req.params.areaId,
      houseId: req.house.id,
    },
  })
    .then((deletedArea) => {
      if (deletedArea === 1) {
        res.status(200).json({ message: "Area deleted successfully" });
      } else {
        res.status(404).json({ message: "Area not found" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

export {
  getHouseArea,
  getHouseAreas,
  createHouseArea,
  updateHouseArea,
  deleteHouseArea,
};
