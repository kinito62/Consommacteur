import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Measurement = sequelize.define("Measurement", {
  unit: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.FLOAT,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

export default Measurement;
