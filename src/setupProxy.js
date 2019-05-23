const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/ms', { target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',changeOrigin: true }));
};