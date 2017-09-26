var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'dist/index.html' }
        ])
    ]
};

module.exports = config;