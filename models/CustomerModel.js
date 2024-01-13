import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    customerId: {
        type: String,
        enum: ["admin","customer1", "customer2" ]
    },
    password: String,

});


export default mongoose.model("Customer", CustomerSchema  );