import mongoose from "mongoose";


const URI = process.env.MONGO_URI as string;

mongoose
  .connect('mongodb://127.0.0.1:27017/podcastApp')
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
