var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM chocolate WHERE address = 'NewYork'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});