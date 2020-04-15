const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'https://readbookk.herokuapp.com' }));
//   app.use(proxy('/*.svg', { target: 'http://localhost:7000/' }));
};