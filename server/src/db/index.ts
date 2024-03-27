import mongoose from "mongoose";
import { MONGO_URI } from "#/utils/variables";

require('dotenv').config();
console.log(MONGO_URI);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/Mangocast" as string)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("db connection failed: ", err);
  });
