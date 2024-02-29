
import mongoose from "mongoose";

require('dotenv').config();
console.log(process.env.MONGO_URI); // Check if MONGO_URI is defined

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", true);
mongoose
  .connect( MONGO_URI as string )
  .then(() => {
    console.log("connection successful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
