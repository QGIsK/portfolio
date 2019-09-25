const express = require("express");

const { checkAuth } = require("../../middleware");

const router = express.Router();

router.use("/file", checkAuth, require("./fileupload"));
router.use("/auth", checkAuth, require("./auth"));
router.use("/post", checkAuth, require("./post"));
router.use("/user", checkAuth, require("./user"));
router.use("/category", checkAuth, require("./category"));
// router.use("/payments", require("./payments"));

router.use("*", (req, res) => res.status(404).json({ error: "Api route not found" }));

module.exports = router;
