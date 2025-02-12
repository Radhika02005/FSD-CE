const http= require('http');
const fs = require('fs');

// Middleware for parsing JSON request bodies
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  fs.readFile('home.html', (err, data) => {
    if (err) {
      res.write('<h1>Error loading home.html</h1>');
    } else {
      res.write(data);
    }
  // res.write("<h1>Hello World</h1>");
  res.end();
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});