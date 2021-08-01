const http = require('http');
const port = process.env.PORT || 3000;
fs = require('fs');

fs.readFile('./Photography.html',function(err, html){
  if(err){
    throw err;
  }
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n';
  res.writeHeader(200,{"Content-Type":"text/html"});
  res.write(html);
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
