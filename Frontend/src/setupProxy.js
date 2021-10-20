const url = process.env.BACKEND_Connection;

const proxy = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(proxy('/api/customer', { target: url }))

}