const path = require('path');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'production',
  target: 'node',

  entry: './src/ssr/index.js',
  output: {
    filename: 'ssr.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    libraryTarget: 'commonjs2',
  },

  externals: ['react-helmet'],

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
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: true,
              },
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
    new DefinePlugin({
      'global.GENTLY': false,
    }),
  ],

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};

module.exports = config;
