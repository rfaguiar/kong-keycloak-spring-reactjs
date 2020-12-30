const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api/*', createProxyMiddleware({
        target: 'http://172.21.0.1:8000/stock',
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        pathRewrite: {
            '^/api': ''
        }})
    );
};