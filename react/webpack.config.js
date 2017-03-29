const path = require('path');
const html = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
module.exports = {
  entry:{
    app:'./src/app.js'
  },
  output:{
    path:path.resolve(__dirname,'build/src'),
    filename:"[name].js"
  },
  module:{
    rules:[
      {
          test: /\.js$/,
          use: [
          {
            loader:'babel-loader',
            options:{
              presets:["latest","react"]
            }
          }],
          exclude: [path.resolve(__dirname, 'node_modules')]
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
  plugins:[
    new html({
      filename: '../index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin('1.css')
  ]
}
