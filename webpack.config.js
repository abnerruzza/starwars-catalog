const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const InterpolateHtmlPlugin = require('@nenado/interpolate-html-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {

    return {
        performance: {
            hints: false
        },
        entry: [
            "@babel/polyfill",
            path.join(__dirname,  "/src/index.js"),
        ],
        module: {
            strictExportPresence: true,
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.svg$/,
                    loader: '@svgr/webpack'
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            javascriptEnabled: true
                        }
                    }]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images/'
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            contentBase: "/",
            historyApiFallback: true,
            inline: true,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js?h=[hash]',
            publicPath: '/'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([
                {
                    from: 'src/Assets',
                    to: './',
                },
            ]),
            new HtmlWebPackPlugin({
                inject: true,
                template: "./src/index.html",
                filename: "./index.html",
                minify: env.production ? true : false
            }),

            new InterpolateHtmlPlugin(env),
            new webpack.DefinePlugin({'NODE_ENV': JSON.stringify(env)}),
        ]
    }
}

