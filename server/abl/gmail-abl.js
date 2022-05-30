const nodemailer = require("nodemailer");
const { google } = require("googleapis");

CLIENT_ID = process.env.CLIENT_ID;
CLIENT_SECRET = process.env.CLIENT_SECRET;
REDIRECT_URL = process.env.REDIRECT_URL;
REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(req, res) {
  const data = req.body;

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "martincintl.fitness@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: data.email,
      to: "martincintl.fitness@gmail.com",
      subject: "Poptávka od: " + data.name,
      text: data.text,
    };

    const result = await transport.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(err);
  }
}

module.exports = { sendMail };
