var http= require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello World!');
}).listen(9001);

console.log('server is running');
