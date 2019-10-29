const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./db/");

const app = express();

// Connect to db
connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(
    "/",
    express.json({
        extended: false
    }),
    require("./routes/")
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
