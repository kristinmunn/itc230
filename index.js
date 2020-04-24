const http = require("http");
const album = require("./data");
var all = album.getAll();

http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Kristin\'s assignment1 Home Page. ' + '\n We have ' + all.length +
      ' albums in our data. ' );
    break;

    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('My name is Kristin. I am taking classes in computer programming to help widen my knowledge and skill base, '+
      'and to hopefully break into the world of IT as a career.');
    break;
    
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
    break;

  }      
}).listen(process.env.PORT || 3000);

