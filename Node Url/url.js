var url = require('url');
var add = 'https://www.facebook.com/mahbubalamevan';
var q = url.parse(add,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
