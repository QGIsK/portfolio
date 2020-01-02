const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  debug: true,
  logger: true,
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready");
  }
});

exports.send = mail => {
  return new Promise((resolve, reject) => {
    let mailOptions = mail;
    transporter.sendMail(mailOptions, e => {
      if (e) reject(e);
      else {
        console.log("Email send");
        resolve();
      }
    });
  });
};
