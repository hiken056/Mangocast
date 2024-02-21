"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/podcastApp')
    .then(() => {
    console.log("connection succesful to the server");
})
    .catch((err) => {
    console.log("connection failed to the server", err);
});
