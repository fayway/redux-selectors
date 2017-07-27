const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = () => {
  return {
    entry: {
      reselect: './src/reselect/main.js',
      plain: './src/plain/main.js',
      vendor: './src/vendor.js'
    },
    output: {
      filename: './dist/[name].bundle.js',
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['reselect', 'plain', 'vendor']
      }),
      new ExtractTextPlugin('style.css'),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, './'),
      overlay: true
    }
  };
};