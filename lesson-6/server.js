const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

const port = 3000;

const createParh = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(createParh('index'));
});
app.get('/news', (req, res) => {
  res.sendFile(createParh('news'));
});
app.get('/news/:id', (req, res) => {
  res.sendFile(createParh('news-inner'));
});
app.get('/contact', (req, res) => {
  res.sendFile(createParh('contact'));
});
app.use((req, res) => {
  res
    .status(404)
    .sendFile(createParh('404'))
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
