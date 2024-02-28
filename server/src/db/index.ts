// Manually set the environment variable
process.env.MONGO_URI = 'mongodb://127.0.0.1:27017/podcastApp';

// Log the value to check if it's set correctly
console.log(process.env.MONGO_URI);

// Continue with your code
import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection successful to the server");
  })
  .catch((err) => {
    console.log("connection failed to the server", err);
  });
