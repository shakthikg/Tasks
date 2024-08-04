var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var name = 'Kitkat';
  var adr = 'London';
  //Escape the address value:
  var sql = 'SELECT * FROM chocolate WHERE name = ? OR address = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});