const path = require("path")
const config = require("./webpack.config")
const { merge } = require("webpack-merge")

// Merge it with webpack.config.js
module.exports = merge(config, {
    mode: "development", // If it's on development
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
})