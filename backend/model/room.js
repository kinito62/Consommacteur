import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Room = sequelize.define("Room", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Room.Place = Room.belongsTo(Place);

export default Room;
