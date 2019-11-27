require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const expressSanitizer = require("express-sanitizer");
const bodyParser = require("body-parser");

const app = express();

require("./db/");

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(expressSanitizer());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

app.use("/static", express.static("static"));

app.use((req, res, next) => {
    next();
});

app.use("/", require("./routes/"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
