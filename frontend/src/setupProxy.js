const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api/*', createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
        pathRewrite: {
            '^/api': ''
        }})
    );
};