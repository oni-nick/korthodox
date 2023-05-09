const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://adsrider.wo.tc/',
      changeOrigin: true,
    })
  );
};
