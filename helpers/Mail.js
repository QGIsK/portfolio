const nodemailer = require('nodemailer');

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
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

exports.send = (mail) => {
  return new Promise((resolve, reject) => {
    const mailOptions = mail;
    transporter.sendMail(mailOptions, (e) => {
      if (e) reject(e);
      else {
        console.log('Email send');
        resolve();
      }
    });
  });
};
