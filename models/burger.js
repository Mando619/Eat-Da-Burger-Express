var orm = require("../config/orm.js");


var burger = {
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(response){
            callBack(response);
        })
    },

    insertOne: function(name, callBack) {
        orm.insertOne("burgers", 
        ["burger_name", "devoured"],[name, false],callBack);
        console.log(name);
    },

}
module.exports = burger;
