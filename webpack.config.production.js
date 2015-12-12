var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./index",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.css$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.png$/,
      loader: 'url-loader?mimetype=image/png',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(woff|eot)$/,
      loader: "file-loader",
      include: path.join(__dirname, 'assets')
    }]
  }
};
