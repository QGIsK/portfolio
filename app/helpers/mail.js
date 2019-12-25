const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

exports.send = mail => {
  let mailOptions = mail;
  transporter.sendMail(mailOptions, e => {
    if (e) throw e;
    else console.log("Email send");
  });
};
