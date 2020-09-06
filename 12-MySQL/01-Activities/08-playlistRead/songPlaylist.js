var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Tbjs233069$",
  database: "playlist_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    createSongs();
  });

function createSongs() {
    console.log("Inserting a new song...\n");
    var query = connection.query(
      "INSERT INTO songs SET ?",
      {
        title: "Girl From Impanema",
        artist: "Jao Gilberto",
        genre: "Jazz"
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " songs inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateSong();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

function updateSong() {
    console.log("Updating all Miles Davis songs...\n");
    var query = connection.query(
      "UPDATE songs SET ? WHERE ?",
      [
        {
          title: "Freddy the Freeloader"
        },
        {
            artist: "Miles Davis"
          }
      ],
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " songs updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
       // deleteSong();
      }
    );

      // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
    console.log("Deleting all Sam Cooke songs...\n");
    connection.query(
      "DELETE FROM songs WHERE ?",
      {
        artist: "Sam Cooke"
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " songs deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readSongs();
      }
    );
  }

function readSongs() {
    console.log("Selecting all songs...\n");
    connection.query("SELECT * FROM songs", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }