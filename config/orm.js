var connection = require("./connection.js");

var orm = {
    selectAll: function() {
        connection.query(
            'query',
            [queryParameters],
            function(error, data) {
                if(error) throw error;
                // logic goes here
            });
    },

   insertOne: function() {
    connection.query(
        'query',
        [queryParameters],
        function(error, data) {
            if(error) throw error;
            // logic goes here
        });
    },
   updateOne: function() {
      connection.query(
          'query',
          [queryParameters],
          function(error, data) {
              if(error) throw error;
              // logic goes here
          });
    },
}

  


module.exports = orm;

