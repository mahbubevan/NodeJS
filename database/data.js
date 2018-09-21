var mysql = require("mysql");

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"group8travelagencymanagementsystem",
});

con.connect(function (err) {
  if (err) throw err;

  var q = "SELECT * FROM user";
  con.query(q,function(err, result,fields){
    if(err) throw err;

    console.log(result);
  });

});
