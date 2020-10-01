var connection = require("./connection.js");


function printQuestionMarks(num) {
    var array = [];
  
    for (var i = 0; i < num; i++) {
      array.push("?");
    }
  
    return array.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objectToSql(object) {
    var array = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in object) {
      var value = object[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(object, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        array.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  var orm = {
    all: function(tableInput, callBack) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callBack(result);
      });
    },
    create: function(table, cols, vals, callBack) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        callBack(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, callBack) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objectToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callBack(result);
      });
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
  
