var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3560Hemsedal",
    port: "1337"
  });
  q = "SELECT * FROM bank_accounts WHERE dob = :dob AND bank_account = :account_number",
    {
     dob: "test",
     account_number: "test"
    }

  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(q);
  });