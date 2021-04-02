const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { createVarsDefinePlugin, varsUsingWebpack } = require('./utils');

const rootPath = path.join(__dirname, '../../')

varsUsingWebpack();

const publicPath = process.env.PATH_STATIC + '/';

module.exports = {
  devtool: 'source-map',
  entry: path.join(rootPath, 'src/index.tsx'),
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      // {
      //   test: /\.svg$/,
      //   use: [{
      //     loader: '@svgr/webpack',
      //     options: {
      //       loader: 'url-loader', options: {
      //         name: '[name].[hash].[ext]',
      //         limit: 70000, //70kb
      //         publicPath
      //       }
      //     }
      //   }]
      // }
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(rootPath, 'dist'),
    filename: '[name].js',
    publicPath
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'public/index.html'),
    }),
  ]
};