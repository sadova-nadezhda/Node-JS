const express = require('express');
const router = express.Router();
const {
  getNews,
  getNewsbyId,
  deleteNews,
  editNews,
  AddNews

} = require('../controllers/api-news-controller')

// Get All News
router.get('/api/news', getNews);

// Add News
router.post('/api/news-app', AddNews);

// Get News by ID
router.get('/api/news/:id', getNewsbyId);

// Delete News by ID
router.delete('/api/news/:id', deleteNews);

// Update News by ID
router.put('/api/edit/:id', editNews);




module.exports = router;
