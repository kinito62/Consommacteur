import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sequelize, connectToDb } from "./db.js";

const app = express();

await connectToDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
