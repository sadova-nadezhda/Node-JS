const News = require('../models/post');


const funError = (res, error) => {
  console.log(error);
  res.render(createParh('404'), {
    title: 'Error'
  });
};

const getNews = (req, res) => {
  News
    .find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => funError(res, error));
};

const getNewsbyId = (req, res) => {
  News
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => funError(res, error));
};

const deleteNews = (req, res) => {
  const { id } = req.params
  News
    .findByIdAndDelete(id)
    .then((post) => res.status(200).json(id))
    .catch((error) => funError(res, error));
};

const editNews = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  News
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.status(200).json(post))
    .catch((error) => funError(res, error));
};

const AddNews = (req, res) => {
  const { title, author, text } = req.body;
  const post = new News({ title, author, text })
  post
    .save()
    .then((result) => res.status(200).json(post))
    .catch((error) => funError(res, error));
};



module.exports = {
  getNews,
  getNewsbyId,
  deleteNews,
  editNews,
  AddNews
}
