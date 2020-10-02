var orm = require("../config/orm.js");


var burger = {
    selectAll: function (callBack) {
        orm.selectAll("burgers",
         function (response) {
            callBack(response);
        })
    },
    // giving boolean value to devoured
    insertOne: function (name, callBack) {
        orm.insertOne("burgers",
         ["burger_name", "devoured"], [name, false], callBack);
        console.log(name);

    },
    // giving  boolean value to devoured
    updateOne: function (id, callBack) {
        var condition = "id =" + id;
        orm.updateOne("burgers",
        { devoured: true }, condition, callBack);
        console.log(id);
    }
};
module.exports = burger;
