import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize, connectToDb } from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import { requireAuth } from "./controllers/authController.js";
import houseRoutes from "./routes/houseRoutes.js";

const app = express();

await connectToDb();
await sequelize.sync({
  force: true,
  alter: true,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/secured", requireAuth, (req, res) => {
  res.send("Hello World! -- Secured --");
});

app.use("/auth", authRoutes);

app.use("/houses", requireAuth, houseRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
