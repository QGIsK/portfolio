const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");
const ExpressBrute = require("express-brute");

const router = express.Router();

const Url = require("./../models/Url");

if (!process.env.environment || process.env.environment === "development") {
    store = new ExpressBrute.MemoryStore();
} else {
    store = new MemcachedStore(["127.0.0.1"], {
        prefix: "NoConflicts"
    });
}

const bruteforce = new ExpressBrute(store);

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
    })

    /**
     * @route   POST /shorten
     * @desc    Create short url
     */

    .post(bruteforce.prevent, async (req, res) => {
        const { longUrl, shortUrl } = req.body;

        // Check if base url is valid
        if (!validUrl.isUri(`${req.protocol}://${req.get("host")}`)) {
            return res.status(401).json("Invalid base url");
        }

        // Create Url code
        const urlCode = !shortUrl ? shortid.generate() : shortUrl;

        // Check if longurl is valid
        if (validUrl.isUri(longUrl)) {
            try {
                // Check if url exists in database
                let url = await Url.findOne({
                    longUrl
                });

                if (url) {
                    return res.json(url);
                }

                // Make short url
                const shortUrl = `${req.protocol}://${req.get(
                    "host"
                )}/${urlCode}`;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                // Save db
                await url.save();

                return res.json(url);
            } catch (err) {
                res.status(500).json("Server error");
            }
        } else {
            res.status(401).json("Invalid long url");
        }
    });

module.exports = router;
