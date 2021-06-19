const path   = require('path')
const merge  = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, './app/'),
    watchContentBase: true,
    publicPath: '',
    compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
    historyApiFallback: true
  },

  devtool: 'inline-source-map',
})
