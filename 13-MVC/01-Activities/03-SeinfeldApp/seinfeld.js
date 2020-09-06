// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Tbjs233069$",
  database: "seinfeld_db", 
  connectTimeout: 50000
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors order by id", function(err, result) {
    if (err) throw err;
    // We then begin building out HTML elements for the page.
    var html = "<h1> Seinfeld Cast </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Cast: " + result[i].name + " </p></li>";
      html += "<p>Coolness: " + result[i].coolness + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";

    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

//Create route for next page here
app.get("/coolness", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors order by coolness desc", function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Seinfeld Cast Coolness Rank </h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Cast: " + result[i].name + " </p></li>";
        html += "<p>Coolness: " + result[i].coolness + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });


//Create route for last page here
app.get("/attitude/:att", function(req, res) {

    // If the main route is hit, then we initiate a SQL query to grab all records.
    // All of the resulting records are stored in the variable "result."
    connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {
      if (err) throw err;
      // We then begin building out HTML elements for the page.
      var html = "<h1> Seinfeld Cast Attitudes </h1>";
  
      // Here we begin an unordered list.
      html += "<ul>";
  
      // We then use the retrieved records from the database to populate our HTML file.
      for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].id + "</p>";
        html += "<p>Cast: " + result[i].name + " </p></li>";
        html += "<p>Coolness: " + result[i].coolness + " </p></li>";
        html += "<p>Attitude: " + result[i].attitude + " </p></li>";
      }
  
      // We close our unordered list.
      html += "</ul>";
  
      // Finally we send the user the HTML file we dynamically created.
      res.send(html);
    });
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
