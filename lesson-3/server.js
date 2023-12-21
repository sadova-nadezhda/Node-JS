const http = require('http');
const url = require('url');
const port = 8080;

const users = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'Jon' },
];

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const pathName = parsedUrl.pathname;
  if (pathName === '/') {
    res.end('Hello, World!')
    return
  }
  else if (pathName === '/users') {
    res.end(JSON.stringify(users));
    return
  }
  else if (pathName === '/products') {
    res.end(JSON.stringify(products))
    return
  }
  else {
    res.end('Page Not Found')
    return
  }
})

server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`)
})
