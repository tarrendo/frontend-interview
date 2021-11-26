const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const express = require('express');

module.exports = {
    entry: join(__dirname, 'app.js'), 
    output: {
        path: join(__dirname, 'build'), 
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, 
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'css',
                            esModule: false
                        }
                    },
                ]
            }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, 'index.html')
        })
    ],
    devServer: {
        onBeforeSetupMiddleware: function (devServer) {
          if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
          }
    
          devServer.app.use('/json', express.static('json')); // Setting up mock api
          devServer.app.use('/public', express.static('public'));
        },
      },
}
