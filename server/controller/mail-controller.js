const express = require("express");

//ABL
const { sendMail } = require("../abl/mail-abl.js");

const mailRouter = express.Router();

mailRouter.post("/post", (req, res) => {
  sendMail(req, res);
});

export { mailRouter };
