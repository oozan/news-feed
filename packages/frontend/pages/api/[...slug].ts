const { createProxyMiddleware } = require('http-proxy-middleware');

const { BACKEND_URL_API, NEXT_PUBLIC_IS_LOCAL_BACKEND } = process.env;
const isLocalBackend = NEXT_PUBLIC_IS_LOCAL_BACKEND?.toLocaleLowerCase() === 'true';

const customRouter = () => {
  return isLocalBackend ? 'http://localhost:3001' : BACKEND_URL_API;
};

const proxy = createProxyMiddleware({
  router: customRouter,
  secure: true,
  changeOrigin: true,
  pathRewrite: { '^/api': '/news-feed/news' }, // Update this line
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProxyRes: (proxyRes: any, req: any) => {
    const exchange = `[HPM] ${req.method} ${req.url} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}]`;
    console.log(exchange);
  },
});

export default proxy;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
