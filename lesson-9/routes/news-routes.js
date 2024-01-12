const express = require('express');
const router = express.Router();
const {
  getNews,
  getNewsbyId,
  deleteNews,
  getEditNews,
  editNews,
  getAddNews,
  AddNews

} = require('../controllers/news-controller')

router.get('/news', getNews);

router.get('/news/:id', getNewsbyId);

router.delete('/news/:id', deleteNews);

router.get('/edit/:id', getEditNews);

router.put('/edit/:id', editNews);

router.get('/news-app', getAddNews);

router.post('/news-app', AddNews);

module.exports = router;
