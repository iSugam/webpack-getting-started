const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Merge it with webpack.config.js
module.exports = merge (config, {
    mode: "production", // If it's ready to deploy
    output: {
        filename: "main.[contenthash].js", // For generating a hash value for updating the cached file on browsers
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name].[hash][ext]' // Adding hash values to image names
    },
    plugins: [new MiniCssExtractPlugin({filename: "styles.[contenthash].css"}), new CleanWebpackPlugin()], // For creating new dist or removing duplicate files fron dist
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS into its own file
                    "css-loader" // For all the css styles
                ],
            },
        ]
    }
})