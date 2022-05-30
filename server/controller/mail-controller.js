const express = require("express");

//ABL
const { sendMail } = require("../abl/gmail-abl");

const mailRouter = express.Router();

mailRouter.post("/post", (req, res) => {
  sendMail(req, res);
});

module.exports = { mailRouter };
