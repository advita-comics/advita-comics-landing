const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [new HotModuleReplacementPlugin(), new HtmlWebpackPlugin()],

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: false,
  },
};

module.exports = config;
