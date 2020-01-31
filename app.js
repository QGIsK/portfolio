require("dotenv").config();

const expressSanitizer = require("express-sanitizer");
const robots = require("express-robots-txt");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

require("./database/");

app.use(robots("./robots.txt"));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(expressSanitizer());

app.use("/static", express.static("resources/static"));
app.use("/public", express.static("resources/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  next();
});

// app.use("/api", express.json(), require("./app/routes/"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/resources/views/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
