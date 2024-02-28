require('dotenv').config({ debug: true });
console.log(process.env.MONGO_URI); // Log MONGO_URI to check if it's defined

import mongoose from "mongoose";
import { MONGO_URI } from "#/utils/variables";

console.log(MONGO_URI);  // Log MONGO_URI to check if it's defined

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connection successful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
