const express = require("express");
const router = express.Router();

const controller = require("./controllers/SettingsController");

const { ensureAuthenticated } = require("@middleware/auth");

router.route("/").get(controller.index).post(ensureAuthenticated, controller.store);

module.exports = router;
