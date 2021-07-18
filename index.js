const http = require('http');
const hostname = "localhost";
const port = process.env.PORT|8080;
http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World6!');
}).listen(port);

console.log(`Server running at http://${hostname}:${port}`);
