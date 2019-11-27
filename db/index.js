const mongoose = require("mongoose");
const db = process.env.MONGO_URI;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(_ => {
        console.log(`DB Connected`);
    })
    .catch(e => {
        console.error(e);
        process.exit();
    });

module.exports = {
    Contact: require("./models/contact"),
    Url: require("./models/url")
};
