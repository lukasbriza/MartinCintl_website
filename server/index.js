import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//MIDDLEWARE//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join("./", "/build")));

//ROUTE CONTROL//
import { mailRouter } from "./controller/mail-controller.js";

app.use("/mail", mailRouter);

//PUBLIC INDEX//
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./", "build", "index.html"));
});
////////////////
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
