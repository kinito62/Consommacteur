import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize, connectToDb } from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import { requireAuth } from "./controllers/authController.js";
import houseRoutes from "./routes/houseRoutes.js";
import subAreaRoutes from "./routes/areaRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";

const app = express();

await connectToDb();
await sequelize.sync({
  // force: true,
  alter: true,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/secured", requireAuth, (req, res) => {
  res.json("Hello World! -- Secured --");
});

app.use("/auth", authRoutes);

app.use("/houses", requireAuth, houseRoutes);

app.use("/areas", requireAuth, subAreaRoutes);

app.use("/sensors", requireAuth, sensorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
