var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

//* Console log all the party names.
//* Console log all the client names.
//* Console log all the parties that have a party-type of grown-up.
//* Console log all the clients and their parties.

var orm = {
  selectPartyName: function(tableInput, colToSearch) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

    selectClientName: function(tableInput, colToSearch) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
    if (err) throw err;
    console.log(result);
 });
},

  selectPartyType: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });

  },
  findClientsParties: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? as tOne";
    var queryString = "left join ?? as tTwo";
    var queryString = "on tOne ?? = tTwo ??";
      //sELECT parties.party_name, parties.party_type, parties.party_cost, clients.client_name from parties inner JOIN clients ON clients.id = parties.client_id;
      //tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol
    connection.query(
      queryString,
      [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
