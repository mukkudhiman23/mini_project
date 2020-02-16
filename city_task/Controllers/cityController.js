const express = require("express");
let router = express.Router();
let { city } = require("../Models/city");
let debounce = require("debounce");

router.get("/", (req, res) => {
  city
    .find((err, docs) => {
      if (!err) {
        res.render("city", { name: docs });
        // res.send(docs);
      } else {
        console.log("Error in Retriving Data :" + JSON.stringify(err));
      }
    })
    .select("city_name");
});
module.exports = router;

function OnChangeCity(val) {
  alert("The input value has changed. The new value is: " + val);
}
