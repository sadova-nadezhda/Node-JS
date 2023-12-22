const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request')
  res.setHeader('Content-Type', 'text/html')
  let basePath = '';
  const createParh = (page) => path.resolve(__dirname, 'views', `${page}.html`);
  switch (req.url) {
    case '/':
      basePath = createParh('index');
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    case '/about':
      basePath = createParh('about');
      res.statusCode = 200;
      break;
    case '/contact':
      basePath = createParh('contact');
      res.statusCode = 200;
      break;
    default:
      basePath = createParh('404');
      res.statusCode = 404;
      break;
  }
  fs.readFile(basePath, (error, data) => {
    if (error) {
      console.log(error);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`Listening port http://localhost:${PORT}`)
})
