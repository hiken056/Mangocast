import mongoose from "mongoose";
import { MONGO_URI } from "../utils/variables";

mongoose.set("strictQuery", true);
mongoose
  .connect('mongodb://127.0.0.1:27017/podcastApp')
  .then(() => {
    console.log("connection succesful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
