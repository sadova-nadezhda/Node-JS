const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const News = mongoose.model('News', newsSchema);
module.exports = News;
