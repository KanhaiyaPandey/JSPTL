import { Router } from "express";
const router = Router();
import { createOrder, getAllOrder } from "../controllers/orderControllers.js";
import {validateFieldsMiddleware} from "../middlewares/validationMiddleware.js"

router.post("/make-order",validateFieldsMiddleware, createOrder);
router.get("/all-orders", getAllOrder);

export default router;