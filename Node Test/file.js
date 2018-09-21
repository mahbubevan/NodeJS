var http = require('http');
var fs = require('fs');
var dt = require('./date');
var Data;

http.createServer(function(req,res){
  fs.readFile('web.html',function(err,data){
    Data = data;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.write("Date and Time: "+ " "+dt.myDateTime());
    res.end();
  });

  fs.appendFile('web.txt',Data,function(err){
    if(err) throw err;
    console.log('File Appened.');
  });

  fs.open('web1.txt','w',function(err,file){
    if (err) throw err;
    console.log('File Created.');
  });

  fs.writeFile('web1.txt',Data,function(err){
    if(err) throw err;
    console.log('File Written.');
  });


}).listen(8080);
