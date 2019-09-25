const mongoose = require("mongoose");

const db = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/url-shortener";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log("mongodb connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
