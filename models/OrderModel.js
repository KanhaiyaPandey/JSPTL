import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customerId: String,
    date: String,
    company: String,
    owner: String,
    item: String,
    quantity: Number,
    weight: Number,
    Address: String,
    trackingID: String,
    shipmentSize: Number,
    boxCount: Number,
    specs: String,
    checklistQuantity: String
});


export default mongoose.model("Order", OrderSchema);