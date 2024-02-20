import express from "express";
import "./db";

const app = express();

const PORT = 8989

app.listen(PORT, () => {
  console.log("port is listening on port " + PORT);
});
