const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { error } = require('console');

const port = 3000;
const app = express();
const db = 'mongodb+srv://admin:Pass123@cluster0.lwcbfjr.mongodb.net/node_news?retryWrites=true&w=majority';

app.set('view engine', 'ejs');

const createParh = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

mongoose.connect(db).then(() => {
  console.log('Connect to DB');
}).catch((error) => {
  console.log(error);
})

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({
  extended: false
}));

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createParh('index'), { title });
});
app.get('/news', (req, res) => {
  const title = 'News';
  const posts = [
    {
      id: 1,
      text: 'test',
      title: 'title 1',
      date: '12.12.2023',
      author: 'Author'
    }
  ]
  res.render(createParh('news'), { title, posts });
});
app.get('/news/:id', (req, res) => {
  const title = 'News Inner';
  const post = {
    id: 1,
    text: 'test',
    title: 'title',
    date: '12.12.2023',
    author: 'Author'
  }
  res.render(createParh('news-inner'), { title, post });
});
app.get('/news-app', (req, res) => {
  const title = 'News App'
  res.render(createParh('news-app'), { title });
});
app.post('/news-app', (req, res) => {
  const { title, author, text } = req.body;
  const post = {
    id: new Date(),
    date: (new Date()).toLocaleDateString(),
    title,
    author,
    text
  }
  res.render(createParh('news-inner'), { title, post });
});
app.get('/contact', (req, res) => {
  const title = 'Contact'
  const socials = [
    { name: 'YouTube', link: 'https://www.youtube.com/' },
    { name: 'Github', link: 'https://github.com/' },
    { name: 'Telegram', link: 'https://web.telegram.org/' },
  ]
  res.render(createParh('contact'), { title, socials });
});
app.use((req, res) => {
  const title = 'PageNotFound'
  res
    .status(404)
    .render(createParh('404'), { title })
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
