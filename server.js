const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
var sql = require("mssql");

var urlencodedparser =  bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname));

app.post('/submitmessage', urlencodedparser, function(req, res) {
    
    
    var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3560Hemsedal",
    database: "contact",
    port: "3306"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    var name = req.body.name;
    var email = req.body.email;
    var text = req.body.text
    var sql = "insert into contact (name, email, text) values ('" + name + "', '" + email + "', '" + text + "');";
    con.query(sql, function (err, result) {
        if (err) throw err;
      });
      res.sendFile('index.html', {root: path.join(__dirname)});
  });
});

var html_dir = './html/';
app.get('/', function(req, res){
    res.sendFile(html_dir + 'index.html');
})

app.listen(3000, function(){
    console.log('Listening on port 8080');
})
