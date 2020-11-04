var connection = require("../config/connection.js");

var orm = {
  // function to display ALL the burgers
  selectAll: function(table, col, cbModel) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
    connection.query(queryString, [table, col], function(err, result) {
      if (err) throw err;
      cbModel(result)
    });
  },

  // function to ADD a new burger created by the user
  insertOne: function(table, col1, col2, val1, val2, cbModel) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col1.toString() + ", " + col2.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?, ?"
    queryString += ") ";

    connection.query(queryString, [val1, val2], function(err, result) {
      if (err) { throw err }
      console.log(result);
      cbModel(result);
    });
  },

  // function to DEVOUR a burger and move it to the right side
  updateOne: function(table, col1, col2, val1, val2, cbModel) {
    var queryString = "UPDATE  " + table;

    queryString += " SET ";
    queryString += " ?? = ?"
    queryString += " WHERE ?? = ?";

    connection.query(queryString, [col1, val2, col2, val1], function(err, result) {
      if (err) { throw err }
      console.log(result);      
      cbModel(result);
    }); 
  }
}

module.exports = orm;
