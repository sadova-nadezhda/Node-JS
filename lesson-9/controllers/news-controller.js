const News = require('../models/post');
const createParh = require('../helpers/create-path');

const funError = (res, error) => {
  console.log(error);
  res.render(createParh('404'), {
    title: 'Error'
  });
};

const getNews = (req, res) => {
  const title = 'News';
  News
    .find()
    .then((posts) => res.render(createParh('news'), { title, posts }))
    .catch((error) => funError(res, error));
};

const getNewsbyId = (req, res) => {
  const title = 'News Inner';
  News
    .findById(req.params.id)
    .then((post) => res.render(createParh('news-inner'), { title, post }))
    .catch((error) => funError(res, error));
};

const deleteNews = (req, res) => {
  News
    .findByIdAndDelete(req.params.id)
    .then((post) => res.sendStatus(200))
    .catch((error) => funError(res, error));
};

const getEditNews = (req, res) => {
  const title = 'Edit News';
  News
    .findById(req.params.id)
    .then((post) => res.render(createParh('news-edit'), { title, post }))
    .catch((error) => funError(res, error));
};

const editNews = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  News
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/news/${id}`))
    .catch((error) => funError(res, error));
};

const getAddNews = (req, res) => {
  const title = 'News App'
  res.render(createParh('news-app'), { title });
};

const AddNews = (req, res) => {
  const { title, author, text } = req.body;
  const post = new News({ title, author, text })
  post
    .save()
    .then((result) => res.redirect('/news'))
    .catch((error) => funError(res, error));
};



module.exports = {
  getNews,
  getNewsbyId,
  deleteNews,
  getEditNews,
  editNews,
  getAddNews,
  AddNews
}
