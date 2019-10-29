const express = require("express");
const redirectController = require("../../controllers/redirectController");

const router = express.Router();

router.use("/shorten", redirectController.store);

module.exports = router;
