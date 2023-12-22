const http = require('http');
const fs = require('fs');
const { error } = require('console');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request')
  res.setHeader('Content-Type', 'text/html')
  if (req.url == '/') {
    fs.readFile('./views/index.html', (error, data) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Listening port http://localhost:${PORT}`)
})
