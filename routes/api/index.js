const express = require('express');

const router = express.Router();

const { Contact, Limiter, Auth } = require('@helpers/Limiters');
const cors = require('cors');
const contactController = require('./controllers/ContactController');

const validate = require('../../middleware/validate');

const contactValidation = require('../../validations/contact.validation');

const whitelist = [
  'https://demiann.dev',
  'https://www.demiann.dev',
  'https://todays.services',
  'https://www.todays.services',
];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

if (process.env.NODE_ENV === 'production') router.use('*', cors(corsOptions));

router.use('/auth', Auth, require('./auth'));
router.use('/general-settings', Limiter, require('./settings'));

router.post('/contact', Contact, validate(contactValidation.contact), contactController.store);

module.exports = router;
