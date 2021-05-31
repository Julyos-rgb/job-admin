const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    //配置环境
    mode: 'development',
    // 配置入口
    entry: {
        app: './src/app.js'
    },
    // 配置出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'app.js',
    },

    // 配置插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new CopyPlugin({
            patterns: [{
                from: path.join(__dirname, './public/*.ico'),
                to: path.join(__dirname, './dist')
            }]
        }),
    ],

    //配置server
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 8080
    }
}