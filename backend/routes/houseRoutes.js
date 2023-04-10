import { Router } from "express";
import {
  createHouse,
  deleteHouse,
  getHouse,
  getHouses,
  updateHouse,
} from "../controllers/houseController.js";

const houseRoutes = Router();

houseRoutes.get("/", getHouses);

houseRoutes.get("/:id", getHouse);

houseRoutes.post("/", createHouse);

houseRoutes.patch("/:id", updateHouse);

houseRoutes.delete("/:id", deleteHouse);

export default houseRoutes;
