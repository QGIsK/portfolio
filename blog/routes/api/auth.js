const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/auth");
const ExpressBrute = require("express-brute");
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
 * @route POST /api/auth/register
 * @desc Register a user to the db then return a token
 * @access Public
 */
router.route("/register").post(bruteforce.prevent, controllers.register_user);

/**
 * @route POST /api/auth/login
 * @desc Login a user and return a token
 * @access Public
 */
router.route("/login").post(bruteforce.prevent, controllers.login_user);

module.exports = router;
