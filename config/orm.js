var connection = require("../config/connection.js");

var orm = {
  selectAll: function(table, orderCol) {
    var queryString = "SELECT * FROM ?? ORDER BY ?? DESC";
    connection.query(queryString, [table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  // insertOne: function(table, cols, vals, cb) {
  //   var queryString = "INSERT INTO " + table +  "(colsVALUES ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [table, cols, vals], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(result);
  //     cb(result);
  //   });
  // },
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
