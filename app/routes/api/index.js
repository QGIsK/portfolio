const express = require("express");
const router = express.Router();

const rateLimit = require("express-rate-limit");

const normalLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
});

router.use("/auth", authLimiter, require("./auth"));

router.use(normalLimiter);

module.exports = router;
