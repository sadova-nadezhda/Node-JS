const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const createParh = (page) => path.resolve(__dirname, 'views', `${page}.html`);

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
app.use((req, res) => {
  res
    .status(404)
    .sendFile(createParh('404'))
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
