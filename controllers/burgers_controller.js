var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");



router.get("/", function(request, response) {
    burger.all(function(burger_data) {
      console.log(burger_data);
      response.render("index", {burger_data});
    });
  });



module.exports = router;
 