const express = require("express");

const app = express();

const portfolio = require("../portfolio/app");
const redirect = require("../to/app");

app.use("/", portfolio);
app.use("/to", redirect);

app.listen(3000, () => console.log("Listening"));
