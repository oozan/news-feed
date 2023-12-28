const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
  app.use(
    '/api/news-feed/news',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Your backend server URL
      changeOrigin: true,
      pathRewrite: {
        '^/api/news-feed/news': '/news-feed/news',
      },
      onProxyRes: (proxyRes: any, req: any) => {
        const exchange = `[HPM] ${req.method} ${req.url} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}]`;
        console.log(exchange);
      },
    })
  );
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
