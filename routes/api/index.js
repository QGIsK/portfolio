const express = require("express");
const router = express.Router();

const { Contact, Limiter, Auth } = require("@helpers/Limiters");
const contactController = require("./controllers/ContactController");

const cors = require("cors");

const whitelist = [
  "https://demiann.dev",
  "https://www.demiann.dev",
  "https://todays.services",
  "https://www.todays.services",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

if (process.env.NODE_ENV != "development") router.use("*", cors(corsOptions));

router.use("/auth", Auth, require("./auth"));
router.use("/general-settings", Limiter, require("./settings"));

router.post("/contact", Contact, contactController.store);

module.exports = router;
