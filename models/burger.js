var orm = require("../config/orm.js");


var burger = {
    all: function(callBack) {
        orm.all("burgers", function(response){
            callBack(response);
        })
    }
}


module.exports = burger;
