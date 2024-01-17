const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const socialsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Socials = mongoose.model('Socials', socialsSchema);

module.exports = Socials;
