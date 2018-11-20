const path = require("path");

const AssetsPlugin = require("assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
  new AssetsPlugin({
    filename: "webpack_assets.json",
    path: path.join(__dirname, "../../../data"),
    prettyPrint: true
  }),
  new ExtractTextPlugin({
    filename: "css/[name].[chunkhash].css"
  })
];

module.exports = plugins;
