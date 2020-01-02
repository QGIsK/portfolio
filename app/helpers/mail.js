const nodemailer = require("nodemailer");

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // naturally, replace both with your real credentials or an application-specific password
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
  debug: true,
  logger: true,
});

// let transporter = nodemailer.createTransport({
//   host: EMAIL_HOST,
//   port: EMAIL_PORT,
//   auth: {
//     user: EMAIL_USER,
//     pass: EMAIL_PASS,
//   },
// });

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
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
