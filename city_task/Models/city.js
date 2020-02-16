const mongoose = require("../db");

var city = mongoose.model("citydetails", {
  city_name: { type: String }
});
module.exports = { city };
