const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/user");

const { ensureAuthenticated } = require("../../middleware/");

/**
 * @route GET /api/user/my
 * @desc Shows current users data
 * @access Authenticated
 */
router.route("/my").get(ensureAuthenticated, controllers.my_profile_get);

/**
 * @route GET /api/user/my/edit
 * @desc Update currents user data
 * @access Authenticated
 */
router.route("/my/edit").post(ensureAuthenticated, controllers.my_profile_update);

/**
 * @route GET /api/user/:user_id
 * @desc Shows users data by id
 * @access Public
 */
router.route("/:user_id").get(controllers.user_profile);

/**
 * @route GET /api/user/:user_id/posts
 * @desc Shows users posts by id
 * @access Public
 */
router.route("/:user_id/posts").get(controllers.user_profile_posts);

module.exports = router;
