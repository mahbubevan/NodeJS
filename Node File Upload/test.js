var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var fse = require('fs-extra');



http.createServer(function(req,res){

  if (req.url=='/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      var oldpath = files.filetoupload.path;
      var newpath = 'E:/Evan/Node Js/Node File Upload/Uploaded File/' + files.filetoupload.name;

      fse.copy(oldpath,newpath,function(err){
        if(err) throw err;
        console.log("Uploaded!");
        res.write("Uploaded!");
        res.end();
      });


    });
  } else {

  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
  }
}).listen(8080);
