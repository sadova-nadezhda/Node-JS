const path = require('path');

const createParh = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

module.exports = createParh;
