const express = require("express");
const expressBrute = require("express-brute");

const router = express.Router();

const redirectController = require("../controllers/redirectController");

if (!process.env.environment || process.env.environment === "development") {
    store = new expressBrute.MemoryStore();
} else {
    store = new MemcachedStore(["127.0.0.1"], {
        prefix: "NoConflicts"
    });
}

const bruteforce = new expressBrute(store);

router.get("/r/:code", redirectController.index);

router.use("/api", bruteforce.prevent, require("./api"));

module.exports = router;
