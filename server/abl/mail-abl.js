import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function sendMail(req, res) {
  //DATA//
  let data = req.body;
  //ERROR BUILDER//
  let err = new Error();
  err.message = "Email se nepodařilo odeslat.";
  err.stack = "mail-abl Error";

  //ABL//
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Od: " + data.name + ". Email: " + data.email,
    text: data.text,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export { sendMail };
