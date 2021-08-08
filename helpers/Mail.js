const nodemailer = require('nodemailer');
const logger = require('./logger');

const { EMAIL_DEBUG, EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

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
  debug: EMAIL_DEBUG,
  logger: EMAIL_DEBUG,
});

transporter
  .verify()
  .then(() => logger.info('Connected to email server'))
  .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));

exports.send = (mail) => {
  return new Promise((resolve, reject) => {
    const mailOptions = mail;
    transporter.sendMail(mailOptions, (e) => {
      if (e) return reject(e);
      logger.info('Email has been send');
      resolve();
    });
  });
};
