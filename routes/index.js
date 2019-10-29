const express = require("express");
const ExpressBrute = require("express-brute");

const router = express.Router();

if (!process.env.environment || process.env.environment === "development") {
    store = new ExpressBrute.MemoryStore();
} else {
    store = new MemcachedStore(["127.0.0.1"], {
        prefix: "NoConflicts"
    });
}

const bruteforce = new ExpressBrute(store);

router.use("/r", bruteforce.prevent, require("./redirect"));

module.exports = router;
