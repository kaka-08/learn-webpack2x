var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');


var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, // Same as `output.publicPath` in most cases.
  noInfo: false,   // true时 会忽略编译的过程 ，默认为false
  stats:{
  	colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));
app.listen(webpackConfig.devServer.port, function () {
  console.log(`Listening on port ${webpackConfig.devServer.port}!`);
});