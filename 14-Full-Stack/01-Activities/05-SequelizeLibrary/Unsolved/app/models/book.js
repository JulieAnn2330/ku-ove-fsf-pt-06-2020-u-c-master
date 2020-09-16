// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Book = sequelize.define("book", {
  // the routeName gets saved as a string
  title: Sequelize.STRING,
  // the name of the character (a string)
  author: Sequelize.STRING,
  // the character's role (a string)
  genre: Sequelize.STRING,
  // the character's age (a string)
  pages: Sequelize.INTEGER
 }, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Book.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Book;