import { House } from "../model/index.js";

const getHouseById = async (req, res, next) => {
    try {
        const house = await House.findOne({where: {id: req.params.houseId, userId: req.user.id}});
        if (!house) return res.status(404).send({ message: "House not found." });

        req.house = house;

        next();
    } catch (err) {
        console.log(err);

        res.status(500).send();
    }
    
};

export { getHouseById };
