const express = require("express");

const router = express.Router();

router.use("/shorten", require("./shorten"));

module.exports = router;
