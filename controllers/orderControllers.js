import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import OrderModel from "../models/OrderModel.js";

export const createOrder = async  (req, res) => {
    req.body.customerId = req.user.customerId;
    const order = await OrderModel.create(req.body);
    res.status(StatusCodes.CREATED).json({order});
}

export const getAllOrder = async (req, res) =>{
     if(req.user.customerId !== "admin") {
        throw new UnauthenticatedError("sorry ! Only for admin")
     }

     const customer1Orders = await OrderModel.find({ customerId: 'customer1' });
     let totalQuantity = 0;
     let totalWeight = 0;
     let totalBoxCount = 0;

     customer1Orders.forEach(order => {
         totalQuantity += order.quantity;
         totalWeight += order.weight;
         totalBoxCount += order.boxCount;
     });

     const customer1 = {
        totalQuantity,
        totalWeight,
        totalBoxCount
     }

     const customer2Orders = await OrderModel.find({ customerId: 'customer2' });
     totalQuantity = 0;
     totalWeight = 0;
     totalBoxCount = 0;

     customer2Orders.forEach(order => {
        totalQuantity += order.quantity;
        totalWeight += order.weight;
        totalBoxCount += order.boxCount;
    });

    const customer2 = {
        totalQuantity,
        totalWeight,
        totalBoxCount
     }


     res.status(200).json({
        customer1,
        customer2
     });

 }

