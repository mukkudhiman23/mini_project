const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/CityDetails",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("connection successfully");
    } else {
      console.log(err);
    }
  }
);
module.exports = mongoose;
