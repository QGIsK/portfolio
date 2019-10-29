const validUrl = require("valid-url");
const shortid = require("shortid");

const Url = require("../db/models/url");

exports.index = async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if (url) {
            return res.redirect(url.longUrl);
        }

        return res.status(404).json("No url found");
    } catch (err) {
        res.status(500).json("Server error");
    }
};

exports.store = async (req, res) => {
    try {
        const { longUrl, shortUrl } = req.body;

        console.log(longUrl);

        // Check if base url is valid
        if (!validUrl.isUri(`${req.protocol}://${req.get("host")}`)) {
            return res.status(401).json("Invalid base url");
        }

        // Create Url code
        const urlCode = !shortUrl ? shortid.generate() : shortUrl;

        // Check if longurl is valid
        if (validUrl.isUri(longUrl)) {
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
            )}/r/${urlCode}`;

            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            });

            // Save db
            await url.save();

            return res.json(url);
        }
        res.status(401).json("Invalid long url");
    } catch (err) {
        res.status(500).json("Server error");
    }
};
