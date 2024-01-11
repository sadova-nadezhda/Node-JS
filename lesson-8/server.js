const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const News = require('./models/post');
const Socials = require('./models/socials');
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
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createParh('index'), { title });
});
app.get('/news', (req, res) => {
  const title = 'News';
  News
    .find()
    .then((posts) => res.render(createParh('news'), { title, posts }))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })

});
app.get('/news/:id', (req, res) => {
  const title = 'News Inner';
  News
    .findById(req.params.id)
    .then((post) => res.render(createParh('news-inner'), { title, post }))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })
});
app.delete('/news/:id', (req, res) => {
  News
    .findByIdAndDelete(req.params.id)
    .then((post) => res.sendStatus(200))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })
});

app.get('/edit/:id', (req, res) => {
  const title = 'Edit News';
  News
    .findById(req.params.id)
    .then((post) => res.render(createParh('news-edit'), { title, post }))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })
});
app.put('/edit/:id', (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  News
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/news/${id}`))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })
});
app.get('/news-app', (req, res) => {
  const title = 'News App'
  res.render(createParh('news-app'), { title });
});
app.post('/news-app', (req, res) => {
  const { title, author, text } = req.body;
  const post = new News({ title, author, text })
  post
    .save()
    .then((result) => res.redirect('/news'))
    .catch((error) => {
      console.log(error)
      res.render(createParh('404'), { title: 'Error' });
    })
});
app.get('/contact', (req, res) => {
  const title = 'Contact'
  Socials
    .find()
    .then((socials) => res.render(createParh('contact'), { title, socials }))
    .catch((error) => {
      console.log(error);
      res.render(createParh('404'), { title: 'Error' });
    })
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
