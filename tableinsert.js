var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  var sql = "INSERT INTO chocolate (name, address) VALUES ?";
  //Make an array of values:
  var values = [
    ['DairyMilk', 'Chicago'],
    ['Kitkat', 'Paris'],
    ['Melody', 'London'],
    ['MilkyBar', 'Russia'],
  ];
  //Execute the SQL statement, with the value array:
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});