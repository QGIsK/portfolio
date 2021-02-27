const express = require("express");
const router = express.Router();

const { Contact } = require("@helpers/Limiters");
const Controller = require("./controllers/ContactController");

const cors = require("cors");

const whitelist = [
  "http://demiann.dev",
  "http://www.demiann.dev",
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

router.use("*", cors(corsOptions));

router.post("/contact", Contact, Controller.store);

module.exports = router;
