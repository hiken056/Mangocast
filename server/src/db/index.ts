
import { MONGO_URI, MAILTRAP_PASS, MAILTRAP_USER, VERIFICATION_EMAIL } from "#/utils/variables";
import mongoose from "mongoose";

require('dotenv').config();

// console.log(MAILTRAP_PASS);
// console.log(MAILTRAP_USER);
// console.log(VERIFICATION_EMAIL);

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connection successful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
