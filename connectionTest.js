var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3560Hemsedal",
    port: "1337"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });