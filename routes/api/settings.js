const express = require("express");
const router = express.Router();

const controller = require("./controllers/SettingsController");

router.route("/").get(controller.index).post(controller.store);

module.exports = router;
