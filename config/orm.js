var connection = require("../config/connection.js");

var orm = {
  // function to display ALL the burgers
  selectAll: function(table, col) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
    connection.query(queryString, [table, col], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  // function to ADD a new burger created by the user

  insertOne: function(table, col1, col2, val1, val2, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col1.toString() + ", " + col2.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?, ?"
    queryString += ") ";

    console.log(queryString);

    // CatApp Activity 17 has a different structure below, NOT "(queryString, [table, col, val], function"
    connection.query(queryString, [val1, val2], function(err, result) {
      if (err) {
        throw err;
      }

      // console.log(result);
      cb(result);
    });
  },

  // function to DEVOUR a burger and move it to the right side

  updateOne: function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "burgers.devoured=1"
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) { throw err }
      console.log(result)
;      cb(result);
    }); 
  }
}

module.exports = orm;
