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
  const title = 'Home'
  res.render(createParh('index'), { title });
});
app.get('/news', (req, res) => {
  const title = 'News'
  res.render(createParh('news'), { title });
});
app.get('/news/:id', (req, res) => {
  const title = 'News Inner'
  res.render(createParh('news-inner'), { title });
});
app.get('/news-app', (req, res) => {
  const title = 'News App'
  res.render(createParh('news-app'), { title });
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
