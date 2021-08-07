const express = require('express');

const router = express.Router();

const { ensureAuthenticated } = require('@middleware/auth');
const controller = require('./controllers/SettingsController');

router.route('/').get(controller.index).post(ensureAuthenticated, controller.store);

module.exports = router;
