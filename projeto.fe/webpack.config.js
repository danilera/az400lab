const path = require('path');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const HtmlWebpackPlugin     = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyWebpackPlugin     = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './app/index.js'
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/[name].bundle.js'
  },

  module: {
    rules: [

      // Babel
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
      },

      // Sass
      {
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './build/'
              }
            },
            'css-loader',
            'sass-loader'
          ]
      },

      // Fonts
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
      },

      // Images
      {
          test: /\.(png?|jpg|jpeg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: 'images/[name].[ext]'
          }
      }
    ]
  },

  plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].bundle.css',
        chunkFilename: 'assets/css/[id].bundle.css'
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './app/views/wall/wall.html',
        chunks: ['app'],
        title: 'FTD'
      }),

      new HtmlWebpackPartialsPlugin([
        {
          path: path.join(__dirname, './app/partials/taghead.html'),
          template_filename: '*',
          priority: 'high',
          location: 'head'
        },
        {
          path: path.join(__dirname, './app/partials/nav/nav.html'),
          template_filename: '*',
          priority: 'high',
          location: 'body'
        },
        {
          path: path.join(__dirname, './app/partials/header/header.html'),
          template_filename: '*',
          priority: 'high',
          location: 'body'
        },
        {
          path: path.join(__dirname, './app/partials/footer/footer.html'),
          template_filename: '*',
          priority: 'low',
          location: 'body'
        },
      ]),

      new CopyWebpackPlugin([
          {from:'./app/assets/images',to:'assets/images'},
          {from:'./app/assets/svg',to:'assets/svg'}
      ]),

      new CleanWebpackPlugin(),
  ]
};
