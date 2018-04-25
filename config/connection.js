var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = function(mysql) {
    var client = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });
    return client;
  }