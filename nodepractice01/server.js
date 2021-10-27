
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Jill',
    job: 'Actress',
    age: 42
  }
  res.end(JSON.stringify(myObj));
});

server.listen(5000, '127.0.0.1');
console.log('you are now listening to port 5000');
