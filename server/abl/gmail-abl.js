const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const fs = require("fs");
const os = require("os");

CLIENT_ID = process.env.CLIENT_ID;
CLIENT_SECRET = process.env.CLIENT_SECRET;
REDIRECT_URL = process.env.REDIRECT_URL;
REFRESH_TOKEN = process.env.REFRESH_TOKEN;

/////////////////////////////////////////////////
//NEW CLIENT//
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
//DEFINE SCOPES//
const scopes = ["https://mail.google.com/"];
//GENERATE URL TO ASK PERMISSIONS//
const authorizationUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
});

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
/////////////////////////////////////////////////////////////////////////
async function sendMail(req, res) {
  const data = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fitness.martincintl@gmail.com",
      pass: "bxyfivvejqouthdv",
    },
  });

  const mailOptions = {
    from: data.email,
    to: "fitness.martincintl@gmail.com",
    subject: "Poptávka od: " + data.name + " | " + data.email,
    text: data.text,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(result);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
}

module.exports = { sendMail };
