const path = require("path");
const config = require("./webpack.config")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// Merge it with webpack.config.js
module.exports = merge (config, {
    mode: "production", // If it's ready to deploy
    output: {
        filename: "main.[contenthash].js", // For generating a hash value for updating the cached file on browsers
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name].[hash][ext]' // Adding hash values to image names
    },
    plugins: [new CleanWebpackPlugin()] // For creating new dist or removing duplicate files fron dist
})