const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html" // To build the html template
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"] // Html loader for loading file source
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/, // Images format
                type: 'asset/resource', // To create a seperate file and export the src/url of the file
            },
        ]
        
    }
}