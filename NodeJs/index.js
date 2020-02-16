const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var employeeController = require("./Controllers/employeeController");

//const {mongoose}= require('db');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.use("/employee", employeeController);
app.listen(3000, () => console.log("server started at 3000 port"));
