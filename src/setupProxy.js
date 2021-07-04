const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api|/pub",
    proxy({
      target: "http://104.193.37.130:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api",
        "^/pub": "/pub"
      }
    })
  );
};