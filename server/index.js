const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

//MIDDLEWARE//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join("./", "/build")));

//ROUTE CONTROL//
const { mailRouter } = require("./controller/mail-controller.js");

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
