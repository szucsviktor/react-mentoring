const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        // hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: ["*",".js", ".jsx", ".json"],
        // modules: [
        //     path.join(__dirname, "src", "components"),
        //     "node_modules"
        // ],
        // alias: {
        //     "components": path.join(__dirname, "src", "components")
        // }

    },
    stats: {
        colors: true
    },
    devtool: "source-map"
};