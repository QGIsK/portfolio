const express = require('express');

const router = express.Router();

const validate = require('@middleware/validate');

const limiter = require('@helpers/Limiters');

const contactValidation = require('@validations/contact.validation');
const contactController = require('./controllers/ContactController');

router.use('/auth', limiter.Auth, require('./auth'));
router.use('/general-settings', limiter.Limiter, require('./settings'));

router.post('/contact', limiter.Contact, validate(contactValidation.contact), contactController.store);

module.exports = router;
