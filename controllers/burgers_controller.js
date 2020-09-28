var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");



router.get("/", function(request, response) {
    burger.all(function(data) {
      var burgerData = {
        burger: data
      };
      console.log(burgerData);
      response.render("index", burgerData);
    });
  });
  

  router.post("/api/burger", function(request, response) {

  });

  router.put("/api/burger/:id", function(request, response) {

  });

  router.delete("api/burger/id", function(request, response) {

  });

  module.exports = router;