const express = require('express');

const router = express.Router();

const { Contact, Limiter, Auth } = require('@helpers/Limiters');
const contactController = require('./controllers/ContactController');

const validate = require('../../middleware/validate');

const contactValidation = require('../../validations/contact.validation');

router.use('/auth', Auth, require('./auth'));
router.use('/general-settings', Limiter, require('./settings'));

router.post('/contact', Contact, validate(contactValidation.contact), contactController.store);

module.exports = router;
