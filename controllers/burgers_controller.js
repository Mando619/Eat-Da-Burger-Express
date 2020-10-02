var express = require("express");
const { end } = require("../config/connection.js");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");



router.get("/", function (request, response) {
  burger.selectAll(function (burger_data) {
    console.log(burger_data);
    response.render("index", { burger_data });
  });
});

router.post("/burgers/post", function (request, response) {
  burger.insertOne(
    [request.body.burger_name],
    function (result) {
      console.log(result)
      response.redirect("/");
    });
});

router.put("/burgers/update", function (request, response) {
  burger.updateOne(request.body.burger_id, function (result) {
    console.log(result);
    response.redirect("/");
  });
});

module.exports = router;
