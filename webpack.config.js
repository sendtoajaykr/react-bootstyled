const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
const packageDirectory = path.resolve(__dirname, './');


module.exports = {
    entry: ["babel-polyfill", path.join(__dirname, "examples/src/index.js")],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // use: "babel-loader",

                include: [
                  // path.resolve(packageDirectory, 'index.web.js'),
                  path.resolve(packageDirectory, 'examples'),
                  path.resolve(packageDirectory, 'src')
                ],
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          ['es2015', {
                              modules: false
                          }], 'react', 'airbnb'
                      ],
                      plugins: ['transform-runtime'],
                      cacheDirectory: true,
                  },
              },
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.web.js', '.js'],
        alias: {
          'react-native': 'react-native-web',
          'styled-components': path.resolve(packageDirectory, 'node_modules', 'styled-components'),
        }
    },
    devServer: {
        port: 3001,
        historyApiFallback: true
    }
};
