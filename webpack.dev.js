require('dotenv').config();

const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'development',

  entry: './src/main-web.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|pdf)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
};

module.exports = config;
