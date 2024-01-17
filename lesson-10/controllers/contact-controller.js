const Socials = require('../models/socials');
const createParh = require('../helpers/create-path');

const funError = (res, error) => {
  console.log(error);
  res.render(createParh('404'), {
    title: 'Error'
  });
};

const getContact = (req, res) => {
  const title = 'Contact'
  Socials
    .find()
    .then((socials) => res.render(createParh('contact'), { title, socials }))
    .catch((error) => funError(res, error));
}

module.exports = {
  getContact,
}
