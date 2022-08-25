const path = require('path');
const webpack = require('webpack');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
module.exports = {
  lintOnSave: true,
  devServer: {
    port: 8080,
  },
  // publicPath: "/tune-calculator/",
  configureWebpack: {
    resolve: {
      alias: {
        src: resolveSrc('src'),
        assets: resolveSrc('src/assets'),
      },
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
    ],
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'prod',
  },
};
