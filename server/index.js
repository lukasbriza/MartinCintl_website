import express from "express";
import path from "path";
import cors from "cors";

require("dotenv").config();
const app = express();

//MIDDLEWARE//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "./build")));

//ROUTE CONTROL//
import { mailRouter } from "./controller/mail-controller";

app.use("/mail", mailRouter);

//PUBLIC INDEX//
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
