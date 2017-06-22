//reference: https://webpack.js.org/guides/hmr-react/

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch', //activate hot-module-replacement for React
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './appDev.jsx'
    ],

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
        hot: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/js/',
        historyApiFallback: true,

        proxy: {
            "/api": "http://0.0.0.0:5000"
        }
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

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}