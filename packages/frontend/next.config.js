module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3004/:path*', // Proxy to Backend
      },
    ];
  },
};
