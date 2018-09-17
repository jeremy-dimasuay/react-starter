const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

/* eslint-disable-next-line no-unused-vars */
module.exports = (options = {}) => {
    const config = {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            modules: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules')
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, 'src/index.html'),
                    to: path.resolve(__dirname, 'dist/index.html')
                }
            ]),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: './dist',
            hot: true
        }
    };

    return config;
};
