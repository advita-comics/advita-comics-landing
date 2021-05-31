require('dotenv').config();

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new Dotenv({
    systemvars: true,
  }),

  new MiniCssExtractPlugin({
    filename: 'main.[contenthash].css',
  }),

  new CompressionPlugin({
    test: /\.(js|css)$/,
  }),

  new WebpackManifestPlugin(),
];

if (process.env.IS_BUNDLE_ANALYZER_PLUGIN_ENABLED) {
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  mode: 'production',

  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    clean: true,
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
        use: [
          MiniCssExtractPlugin.loader,
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

  plugins,

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};

module.exports = config;
