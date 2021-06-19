const path   = require('path')
const merge  = require('webpack-merge')
const common = require('./webpack.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './app/assets/favicon/matrix.png',
      mode: 'webapp',
      devMode: 'webapp',
      inject: true,
      prefix: 'assets/favicons/',

      favicons: {
        appName: 'skeleton',
        appDescription: 'FTD',
        developerName: 'FTD Educação',
        developerURL: null,
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false,
          windows: false
        }
      }
    }),
  ]
})
