var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './index.js',
    //'./css/style.css'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'stage-2' ]
        }
      },
    { test: /\.css$/, loaders: ["style", "css"] }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};