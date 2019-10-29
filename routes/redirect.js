const express = require("express");

const router = express.Router();

const Url = require("../db/models/url");

router
    .route("/:code")

    /**
     * @route GET /:code
     * @desc Redirect to long/original URL
     */

    .get(async (req, res) => {
        try {
            const url = await Url.findOne({ urlCode: req.params.code });

            if (url) {
                return res.redirect(url.longUrl);
            }

            return res.status(404).json("No url found");
        } catch (err) {
            res.status(500).json("Server error");
        }
    });

module.exports = router;
