import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Place = sequelize.define("place", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Place.House = Place.belongsTo(House);

export default Place;
