var http = require('http');

var so = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write(req.url);
    res.end();
});

so.listen(8080);
