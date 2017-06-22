const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: './app.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
        pathinfo: true,
        publicPath: '/dist/js/',
        sourceMapFilename: '[name].map'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
}