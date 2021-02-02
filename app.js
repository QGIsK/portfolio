require("dotenv").config();

const expressSanitizer = require("express-sanitizer");
const robots = require("express-robots-txt");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// require("./database/");
const DB = require("./database/");

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

app.use((req, res, next) => {
  next();
});

app.get("/go/:code", async (req, res) => {
  try {
    const url = await DB.Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    }

    return res.status(404).json("No url found");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

app.use("/api", require("./routes/"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
