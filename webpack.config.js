const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    entry: [
      './src/main.js'
    ],
    output: {
      filename: './dist/bundle.js',
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      overlay: true
    }
  };
};