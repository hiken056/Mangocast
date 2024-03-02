
import { MONGO_URI } from "#/utils/variables";
import mongoose from "mongoose";

require('dotenv').config();


mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connection successful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
