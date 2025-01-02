const { merge } = require('webpack-merge');
const getBaseCfg = require('./webpack.base');
const path = require('path');

module.exports = merge(getBaseCfg(true), {
    // 开发环境
    mode: 'development',
    // 源码调试
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        compress: false, // 不压缩，热更新，快一些
        hot: true, // 热更新
        historyApiFallback: true, // history 路由 404 问题
        static: {
            // 托管的静态 public 文件夹
            directory: path.join(__dirname, './public'),
        },
    },
});
