const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssRules = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader?importLoaders=1!postcss-loader"
  })
};

module.exports = cssRules;
