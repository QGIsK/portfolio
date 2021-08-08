const express = require('express');
const settingsController = require('@controllers/settings.controller');

const router = express.Router();

router.get('/', settingsController.getGeneralSettings);

module.exports = router;
