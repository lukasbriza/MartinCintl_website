const express = require("express");

//ABL
import { sendMail } from "../abl/mail-abl.js";

const mailRouter = express.Router();

mailRouter.post("/post", (req, res) => {
  sendMail(req, res);
});

export { mailRouter };
