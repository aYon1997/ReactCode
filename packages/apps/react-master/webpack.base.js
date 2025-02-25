const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (isDev) {
    return {
        // 1. 输入输出部分
        // 最基础的，就是我的入口
        entry: path.resolve(__dirname, './src/index.tsx'),
        output: {
            // 打包输出的结果路径
            path: path.resolve(__dirname, './dist'),
            // 每个输出的 js 的名称
            // hash, chunkhash, contenthash
            filename: 'static/js/[name].[hash:8].js',
            // webpack 4 没有，clean-webpack-plugin
            // webpack 5 内置，构建前删除一下 dist
            clean: true,
            // 打包后的公共路径, 本地开发或者生产环境需要设置为绝对路径，DOM才能显示
            // publicPath: '/',
            // 由于我要在github pages上发布，为了让它我这里只能设置为相对路径
            publicPath: './',
        },

        // 2. resolve 部分
        // 我文件是如何优化搜索依赖的
        // 用于引入模块时，可以不带文件后缀，本质也是一个优先级的顺序，可能会影响构建性能
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
        },

        // 3. loader 部分
        module: {
            // loader 就是在你从入口文件，去解析各种 import, from 的文件时
            // 针对不同类型的文件，有不同的处理方法，这个不同后缀的文件
            // 需要有一个解析器，去识别这些文件的内容
            rules: [
                {
                    test: /\.(tsx|ts|jsx|js)$/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    // 定义一个规则，只选一个就好
                    oneOf: [
                        {
                            test: /\.module\.(less|css)$/,
                            include: [path.resolve(__dirname, './src')],
                            use: [
                                isDev
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: {
                                            // 我们可以借助 css-module， 实现 BEM 风格
                                            localIdentName:
                                                '[path][name]__[local]--[hash:base64:5]',
                                        },
                                    },
                                },
                                'postcss-loader',
                                'less-loader',
                            ],
                        },
                        {
                            test: /\.css$/,
                            use: [
                                isDev
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                            ],
                        },
                        {
                            test: /\.less$/,
                            use: [
                                isDev
                                    ? 'style-loader'
                                    : MiniCssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                                'less-loader',
                            ],
                        },
                    ],
                },
                {
                    // webpack 5 以前，要用 url|file-loader，现在内置了
                    test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
                    // 加这个属性，图片才能解析成功
                    type: 'asset',
                    generator: {
                        filename: 'static/images/[name].[contenthash:8][ext]',
                    },
                },
                {
                    // webpack 5 以前，要用 url|file-loader，现在内置了
                    test: /\.(woff2?|eot|ttf|otf)$/,
                    generator: {
                        filename: 'static/fonts/[name].[contenthash:8][ext]',
                    },
                },
                {
                    // webpack 5 以前，要用 url|file-loader，现在内置了
                    test: /\.(mp4|flv|mp3|wav)$/,
                    generator: {
                        filename: 'static/media/[name].[contenthash:8][ext]',
                    },
                },
            ],
        },

        // 4. 插件部分
        plugins: [
            new HtmlWebpackPlugin({
                // 我们把生成的 js 和 css, 注入到一个html 模板中
                template: path.resolve(__dirname, './public/index.html'),
                // 浏览器标签页标题
                title: '心灵SPA',
            }),
            new MiniCssExtractPlugin({
                filename: isDev
                    ? 'static/css/[name].css'
                    : 'static/css/[name].[contenthash:4].css',
            }),
        ],
    };
};
