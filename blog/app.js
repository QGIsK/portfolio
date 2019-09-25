const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config");

const app = express();

const db = config.mongoUri;

mongoose.set("debug", true);
mongoose
	.connect(db, {
		useNewUrlParser: true,
	})
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/public", express.static("public"));
app.use("/static", express.static("static"));

app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use((req, res, next) => {
	next();
});

app.use("/api", express.json(), require("./routes/api/"));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/views/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
