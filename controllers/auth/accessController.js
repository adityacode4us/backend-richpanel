import Joi from "joi";
import CustomErrorHandler from "../../services/CustomErrorHandler";
import { User } from "../../models";
import bcrypt from "bcrypt";
import JwtService from "../../services/JwtService";
const accessController = {
  async access(req, res, next) {
    //validation
    try {
      console.log("someone come");
      const user_id = req.user._id;
      const user = await User.findById(user_id).select("-password");
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  },
};

export default accessController;
