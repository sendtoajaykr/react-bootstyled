const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, 'examples/src/index.html'),
    filename: './index.html'
});

module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, 'examples/src/index.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};