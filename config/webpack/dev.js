const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development',
      __DEV__: 'development'
    }),
    new FriendlyErrors({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
