import { Router } from "express";
import {
  createHouse,
  deleteHouse,
  getHouse,
  getHouses,
  updateHouse,
} from "../controllers/houseController.js";
import { createHouseArea, deleteHouseArea, getHouseArea, getHouseAreas, updateHouseArea } from "../controllers/areaController.js";
import { getHouseById } from "../middlewares/houseMiddleware.js";

const houseRoutes = Router();

houseRoutes.get("/", getHouses);

houseRoutes.get("/:houseId", getHouse);

houseRoutes.post("/", createHouse);

houseRoutes.patch("/:houseId", updateHouse);

houseRoutes.delete("/:houseId", deleteHouse);

const houseAreaRoutes = Router();

houseAreaRoutes.get("/", getHouseAreas);

houseAreaRoutes.get("/:areaId", getHouseArea);

houseAreaRoutes.post("/", createHouseArea);

houseAreaRoutes.patch("/:areaId", updateHouseArea);

houseAreaRoutes.delete("/:areaId", deleteHouseArea);

houseRoutes.use("/:houseId/areas", getHouseById, houseAreaRoutes);

export default houseRoutes;
