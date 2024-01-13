import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan, { format } from "morgan";
import mongoose from "mongoose";

// cookie parser
import cookieParser from "cookie-parser";

// routes
import authRouter from "./routes/authRouter.js";
import orderRouter from "./routes/orderRouter.js";

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middleware
import { authenticateUser } from "./middlewares/authenticateUser.js";
import errorHandler from "./middlewares/errorHandler.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

if(process.env.NODE_ENV === "development"){
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname,"./client/dist")))
app.use(cookieParser());
app.use(express.json());
app.use(errorHandler);


app.use("/api/v3/auth", authRouter);
app.use("/api/v3/order",authenticateUser, orderRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

const port = process.env.PORT || 3000;

try {
    await mongoose.connect(process.env.MONGO_DB);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}....`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  };