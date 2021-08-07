const express = require('express');

const router = express.Router();

const Controller = require('./controllers/RedirectController');

router.get('/:code', Controller.index);

module.exports = router;
