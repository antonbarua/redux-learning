const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        pathinfo: true,
        publicPath: '/dist/js/',
        sourceMapFilename: '[name].map'
    },

    devtool: 'eval-source-map',

    devServer: {
        host: "0.0.0.0",
        port: 9000,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/js/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}