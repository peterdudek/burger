var connection = require("../config/connection.js");

var orm = {
  // function to display ALL the burgers
  selectAll: function(table, orderCol) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
    connection.query(queryString, [table, orderCol], function(err, result) {
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

  // updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
}

module.exports = orm;
