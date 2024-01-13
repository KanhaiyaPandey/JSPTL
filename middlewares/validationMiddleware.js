import {body,validationResult} from "express-validator"
import User from "../models/CustomerModel.js";
import { BadRequestError, UnauthenticatedError } from "../errors/customErrors.js";

const withValidationErrors = (validateValues)=>{
    return [
        validateValues, 
        (req,res,next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              const errorMessage = errors.array().map((error) => error.msg);
              if(errorMessage[0].startsWith("not authorized")){
               if(!isAdmin) throw new UnauthenticatedError("not authorized to access this route")
              }
              throw new BadRequestError(errorMessage);
            }
            next();
     },
  ];
};

export const validateFieldsMiddleware = withValidationErrors([
    body("quantity").isInt().withMessage("Quantity must be a valid integer"),
    body("item").notEmpty().withMessage("Item is required"),
    body("weight").isNumeric().withMessage("Weight must be a valid number"),
    body("trackingID").notEmpty().withMessage("Tracking ID is required"),
    body("address").notEmpty().withMessage("address is required"),
    body("boxCount").notEmpty().withMessage("box count is required")
    .isInt().withMessage("box count should be in number"),
    body("specs").notEmpty().withMessage("specs is required"),
    body("checklistQuantity").notEmpty().withMessage("checklist quantity is required"),
    body("shipmentSize").notEmpty().withMessage("shipment size is required").isInt().withMessage("shipment size should be in m/sq"),
  ]);