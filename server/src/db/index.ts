import { MONGO_URI } from "#/utils/variables";
import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();



require('dotenv').config();
console.log(MONGO_URI);

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI as string)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db connection failed: ", err);
  });
