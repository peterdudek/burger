var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cbController) {
    orm.selectAll("burgers", "id", function (result) {
      cbController(result);
    })
  },
  insertOne: function (col1, col2, val1, val2, cbController) {
    orm.insertOne("burgers", col1, col2, val1, val2, function(result) {
      cbController(result);
    })
  },
  updateOne: function (val1, val2, cbController) {
    orm.updateOne("burgers", "devoured", "id", val1, val2, function(result) {
      cbController(result);
    })
  }
}

module.exports = burger;