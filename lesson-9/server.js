const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const NewsRouter = require('./routes/news-routes');
const ContactRouter = require('./routes/contact-routes');
const newsApiRouter = require('./routes/api-news-routes');
const createParh = require('./helpers/create-path');
const { error } = require('console');

const port = 3000;
const app = express();
const db = 'mongodb+srv://admin:Pass123@cluster0.lwcbfjr.mongodb.net/node_news?retryWrites=true&w=majority';

app.set('view engine', 'ejs');

mongoose.connect(db).then(() => {
  console.log('Connect to DB');
}).catch((error) => {
  console.log(error);
})

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createParh('index'), { title });
});

app.use(NewsRouter);
app.use(ContactRouter);
app.use(newsApiRouter);

app.use((req, res) => {
  const title = 'PageNotFound'
  res
    .status(404)
    .render(createParh('404'), { title })
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
});
