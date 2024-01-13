import { StatusCodes } from "http-status-codes";
import CustomerModel from "../models/CustomerModel.js";

export const getCurrentUser = async (req, res) =>{
    const userWithoutPassword = await CustomerModel.findOne({_id: req.user.userId});
    const user = userWithoutPassword.toJSON();
    res.status(StatusCodes.OK).json({user});
}