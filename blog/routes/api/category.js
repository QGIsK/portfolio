const express = require("express");
const path = require("path");

const router = express.Router();

const controllers = require("../../controllers/category");

const {
  ensureAuthenticated,
  ensureAdmin,
} = require("../../middleware/");


/**
 * @route GET /api/category/
 * @desc Shows all categories
 * @access Public
 */
router
  .route("/")
  .get(controllers.category_all);


/**
 * @route POST /api/category/new
 * @desc Create a new category
 * @access Admin
 */
router
  .route("/new")
  .post(ensureAuthenticated, ensureAdmin, controllers.category_new);

/**
 * @route POST /api/category/:category_id/edit
 * @desc Edit a new category
 * @access Admin
 */
router
  .route("/:category_id/edit")
  .post(ensureAuthenticated, ensureAdmin, controllers.category_edit);

/**
 * @route POST /api/category/:category_id/delete
 * @desc Delete a new category
 * @access Admin
 */
router
  .route("/:category_id/delete")
  .get(ensureAuthenticated, ensureAdmin, controllers.category_delete);

module.exports = router;
