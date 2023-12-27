const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});

const createParh = (page) => path.resolve(__dirname, 'views', `${page}.html`);

const users = [
  { name: 'user1', password: '123' },
  { name: 'user2', password: '1234' }
]

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(createParh('index'));
});

app.get('/users/:index', (req, res) => {
  let index = req.params.index;
  if (users[index]) {
    res.json(users[index]);
  } else {
    res.send('Такого пользователя нет')
  }
});
