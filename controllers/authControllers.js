import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import CustomerModel from "../models/CustomerModel.js";
import { StatusCodes } from "http-status-codes";

export const register = async(req, res) =>{
 
    const hashedPassword = await hashPassword(req.body.password)
    req.body.password = hashedPassword;
    const user = await CustomerModel.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: "customer created" });
};

export const login = async (req, res) =>{
    const customer = await CustomerModel.findOne({customerId: req.body.customerId});  
    const isValidUser = customer && (await comparePassword(req.body.password, customer.password));
    if(!isValidUser) throw new UnauthenticatedError("invalid credentials");


    const token = createJWT({customerId: customer.customerId});
    const oneDay = 60*60*1000*24;

res.cookie("token", token,{ 
httpOnly: true,
expires: new Date(Date.now() + oneDay),
secure: process.env.NODE_ENV === "production"
})
  res.status(StatusCodes.OK).json({msg: "user logged in"})
};