const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/file");
const ExpressBrute = require("express-brute");
const upload = require("../../middleware/uploadImage");

let store;

if (!process.env.environment || process.env.environment === "development") {
	store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
} else {
	// stores state with memcached
	store = new MemcachedStore(["127.0.0.1"], {
		prefix: "NoConflicts",
	});
}
const bruteforce = new ExpressBrute(store);

const { ensureAuthenticated } = require("../../middleware/");

/**
 * @route POST /api/file/upload
 * @desc Upload a image
 * @access Authenticated^
 */

router.route("/upload").post(bruteforce.prevent, ensureAuthenticated, upload.single("file"), controllers.upload);

module.exports = router;
