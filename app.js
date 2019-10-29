const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const connectDB = require("./db/");

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/static", express.static("static"));

app.use(
    "/",
    express.json({
        extended: false
    }),
    require("./routes/")
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
