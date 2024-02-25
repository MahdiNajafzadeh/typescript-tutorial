"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
// init .env file
dotenv.config();
// init express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/person", routes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server Up on PORT : ${process.env.PORT}`);
});
