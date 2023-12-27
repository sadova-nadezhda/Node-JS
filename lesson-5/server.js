const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const createParh = (page) => path.resolve(__dirname, 'views', `${page}.html`);

// const parser = bodyParser.urlencoded({
//   extended: false
// })

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: false
}));

// app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
  res.sendFile(createParh('index'));
});
app.get('/contact', (req, res) => {
  res.sendFile(createParh('contact'));
});
app.get('/about', (req, res) => {
  res.sendFile(createParh('about'));
});
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});
app.get('/login', (req, res) => {
  res.sendFile(createParh('login'));
});
app.post('/login', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body.user);
});
app.use((req, res) => {
  res
    .status(404)
    .sendFile(createParh('404'))
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
