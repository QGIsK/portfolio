!process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? (module.exports = require("./dev"))
    : (module.exports = require("./prod"));
