const express = require("express");

const redirectController = require("../../controllers/redirectController");
const contactController = require("../../controllers/contactController");

const router = express.Router();

router.post("/shorten", redirectController.store);
router.post("/contact", contactController.store);

module.exports = router;
