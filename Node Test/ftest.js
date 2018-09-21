var http = require('http');
var fs = require('fs');
var Data;


http.createServer(function(req,res){
  fs.unlink('web1.txt',function(err){
    if(err) throw err;
    console.log("File Deleted.");
  });
}).listen(8080);
