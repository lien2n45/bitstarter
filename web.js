#!/usr/bin/env node

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
var sContent = '';
sContent = fs.readFileSync('index.html');
res.end(sContent);
}).listen(process.env.PORT || 8124);

