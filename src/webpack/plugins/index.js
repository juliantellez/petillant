const path = require('path');

const AssetsPlugin = require("assets-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
    new AssetsPlugin({
        filename: "webpack_assets.json",
        path: path.join(__dirname, "../../../data"),
        prettyPrint: true
    }),
    // new ExtractTextPlugin({
    //     filename: getPath => {
    //         return getPath("css/[name].[contenthash].css");
    //     },
    //     allChunks: true
    // })
];

module.exports = plugins;