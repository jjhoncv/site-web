const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[fullhash].min.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // outputPath: 'images/',
              // publicPath: 'images/',
            },
          },
        ],
      },
    ],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].min.css'
    })
  ]
});