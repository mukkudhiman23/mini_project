const express = require("express");
const bodyParser = require("body-parser");

var cityController = require("./Controllers/cityController");

var app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use("/", cityController);
app.listen(3000, () => console.log("server started at 3000 port"));
