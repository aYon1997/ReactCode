const { merge } = require('webpack-merge');
const getBaseCfg = require('./webpack.base');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(getBaseCfg(false), {
    // 开发环境
    mode: 'production',

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log', 'console.warn'],
                    },
                },
            }),
        ],

        // 代码自动分包
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    // minChunk: 3
                    // chunks: initail async all
                    // minSize
                },
                commons: {
                    name: 'commons',
                },
            },
        },
    },
});
