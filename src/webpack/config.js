const path = require("path");
const webpack = require("webpack");

const rules = require("./rules");
const plugins = require("./plugins");

const INPUT = path.resolve(__dirname, "../js/main.js");
const OUTPUT = path.resolve(__dirname, "../../static/dist");

const webpackConfig = {
    mode: 'none',
    entry: {
        app: INPUT
    },
    output: {
        path: OUTPUT,
        filename: "js/[name].[chunkhash].js"
    },
    module: {
        rules
    },
    plugins
};

module.exports = webpackConfig