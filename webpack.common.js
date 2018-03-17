const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'cyan')
    },
    plugins: [
        new CleanWebpackPlugin(['cyan']),
        new HtmlWebpackPlugin({
            title: 'Test'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /{node_modules}/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
            {
                test: /.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            }
        ]
    }
}
