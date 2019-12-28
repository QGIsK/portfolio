const express = require("express");
const router = express.Router();

const redirectController = require("../controllers/RedirectController");
const contactController = require("../controllers/ContactController");

const rateLimit = require("express-rate-limit");

const normalLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 75, // limit each IP to 100 requests per windowMs
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5, // limit each IP to 100 requests per windowMs
});

router.use(normalLimiter);

router.get("/r/:code", redirectController.index);
// router.post("/shorten", redirectController.store);
router.post("/contact", contactLimiter, contactController.store);

module.exports = router;
