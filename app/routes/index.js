const express = require("express");
const router = express.Router();

const DB = require("../../database/");

router.get("/:code", async (req, res, next) => {
  try {
    const url = await DB.Url.findOne({ urlCode: req.params.code });

    console.log(url);

    if (url) {
      return res.redirect(url.longUrl);
    }

    return res.status(404).json("No url found");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;
