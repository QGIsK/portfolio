const express = require("express");
const router = express.Router();

const { Contact, Limiter } = require("./helpers/Limiters");
const Controller = require("./controllers/ContactController");

router.post("/contact", Contact, Controller.store);

module.exports = router;
