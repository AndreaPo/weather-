const HtmlWebpackPlugin = require('html-webpack-plugin');//installed via npm
var path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new Dotenv({
            path: '', 
      safe: true, 
      allowEmptyValues: true,
      systemvars: true, 
      silent: true, 
      defaults: false 
          })
      ]
  };