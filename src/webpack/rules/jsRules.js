const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["env"]
    }
  }
};

module.exports = jsRules;
