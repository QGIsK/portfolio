const express = require("express");
const router = express.Router();

const redirectController = require("../controllers/RedirectController");
// const contactController = require("../controllers/ContactController");

const rateLimit = require("express-rate-limit");

const normalLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.use(normalLimiter);

router.get("/r/:code", redirectController.index);
// router.post("/shorten", redirectController.store);
// router.post("/contact", contactController.store);

module.exports = router;
