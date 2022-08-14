const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html" // for build the html template
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // To put css files inside <style></style> element
                    "css-loader" // For all the css styles
                ],
            },
        ]
        
    }
}