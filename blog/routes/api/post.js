const express = require("express");
const path = require("path");

const router = express.Router();

const controllers = require("../../controllers/post");
const upload = require("../../middleware/uploadImage");

const {
	ensureAuthenticated,
	ensurePostOwner,
	ensureCommentOwner,
	ensureEditor,
	ensureAdmin,
} = require("../../middleware/");

/**
 * @route GET /api/post/
 * @desc Finds last 12 posts
 * @access Public
 */
router.route("/").get(controllers.all_posts);

/**
 * @route GET /api/post/filter
 * @desc Finds all posts by category and sends back the last 6
 * @access Public
 */
// router.route("/filter").get(controllers.filter_categories);

/**
 * @route POST /api/post/new
 * @desc Make a new post
 * @access Editors & Admins
 */
router.route("/new").post(ensureAuthenticated, ensureEditor, upload.single("image"), controllers.new_post);

/**
 * @route GET /api/post/my
 * @desc Shows all of my posts in sets of 6
 * @access Editors & Admins
 */
router.route("/my").get(ensureAuthenticated, ensureEditor, controllers.my_posts);

/**
 * @route GET /api/post/:id
 * @desc Shows the post by id
 * @access Public
 */
router.route("/:id").get(controllers.post_by_id);

/**
 * @route POST /api/post/:post_id/edit
 * @desc Edit the post by id
 * @access Editors & Admins
 */
router.route("/:post_id/edit").post(ensureAuthenticated, ensureEditor, upload.single("image"), controllers.edit_post);

/**
 * @route GET /api/post/:post_id/delete
 * @desc Deletes post by id
 * @access Editors & Admins
 */
router.route("/:post_id/delete").get(ensureAuthenticated, ensureEditor, controllers.delete_post);

/**
 * @route POST /api/post/:post_id/comment/new
 * @desc Create a comment under the post
 * @access Authenticated
 */
router.route("/:post_id/comment/new").post(ensureAuthenticated, controllers.new_comment);

/**
 * @route POST /api/post/:post_id/comment/:comment_id/edit
 * @desc Edit a comment under the post
 * @access Admin & Comment owner
 */
router
	.route("/:post_id/comment/:comment_id/edit")
	.post(ensureAuthenticated, ensureCommentOwner, controllers.edit_comment);

/**
 * @route GET /api/post/:post_id/comment/delete
 * @desc Delete a comment under the post
 * @access Admin & Comment owner
 */
router
	.route("/:post_id/comment/:comment_id/delete")
	.get(ensureAuthenticated, ensureCommentOwner, controllers.delete_comment);

module.exports = router;
