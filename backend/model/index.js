import User from "./User.js";
import House from "./house.js";

House.belongsTo(User);

export {
    User, House,
}
