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
      
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        array.push(key + "=" + object[key]);
      }

  
    // translate array of strings to a single comma-separated string
    return array.toString();
  }
  var orm = {
    selectAll: function(tableInput, callBack) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(error, result) {
        if (error) {
          throw error;
        }
        callBack(result);
      });
    },
    insertOne: function(table, cols, vals, callBack) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(error, result) {
        if (error) {
          throw error;
        }
  
        callBack(result);
      });
    },
    
    updateOne: function(table, objColVals, condition, callBack) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objectToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(error, result) {
        if (error) {
          throw error;
        }
  
        callBack(result);
      });
    }
  };
  
  // Export the orm object for the model (burger.js).
  module.exports = orm;
  
