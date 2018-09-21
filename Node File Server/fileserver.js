var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(req,res){
  var add = req.url;
  var q = url.parse(add,true);
  var filename = "."+q.pathname;
  console.log(filename);

  fs.readFile(filename,function(err,data){
    if (err){
      res.writeHead(400,{'Content-Type':'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
