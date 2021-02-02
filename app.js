require("dotenv").config();
require("module-alias/register");

const expressSanitizer = require("express-sanitizer");
const robots = require("express-robots-txt");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const subdomain = require("express-subdomain");

const app = express();

require("@database/");

app.use(robots("./robots.txt"));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(expressSanitizer());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("resources/"));

app.use((req, res, next) => {
  next();
});

app.use(subdomain("api", require("@routes/api")));
app.use(subdomain("go", require("@routes/redirector")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
