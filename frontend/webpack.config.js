const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    //配置环境
    mode: 'development',

    devtool: 'source-map',
    //配置入口
    entry: {
        'js/app': './src/app.js'
    },
    //配置出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name]-[hash:6].js'
    },

    module: {
        rules: [{
                test: /\.art$/,
                use: {
                    loader: 'art-template-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    //配置插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new CopyPlugin({
            patterns: [{
                from: './public/*.ico',
                to: path.join(__dirname, './dist/favicon.ico'),
            }]
        }),
        new CleanWebpackPlugin()
    ],


    //配置server
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8080
    }
}