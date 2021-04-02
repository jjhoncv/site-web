const { merge } = require('webpack-merge');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|woff2|woff|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 70000, //70kb
            publicPath: baseConfig.output.publicPath
          },
        }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
});