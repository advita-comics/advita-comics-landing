require('dotenv').config();

const {
  DefinePlugin,
  SourceMapDevToolPlugin,
} = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const DIST_PATH = path.resolve(__dirname, 'dist');

const getConfig = (target) => ({
  name: target,

  mode: 'production',

  // Prefer browserslist over web target.
  target: target === 'web' ? 'browserslist' : target,

  entry: `./src/main-${target}.js`,

  output: {
    path: path.resolve(DIST_PATH, target),
    publicPath: `/dist/${target}/`,
    filename: target === 'web' ? 'main.[contenthash].js' : 'main.js',
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
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
        options: {
          publicPath: '/dist/web/',
          emitFile: target === 'web',
        },
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

  devtool: target === 'web' ? 'source-map' : false,

  optimization: {
    moduleIds: 'named',
    chunkIds: 'named',
  },

  externalsPresets: target === 'node'
    ? {
      node: true,
    } : undefined,

  externals: target === 'node'
    ? [
      'react-helmet',
      nodeExternals({
        // Allow bundle non-js files
        allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
      }),
    ] : undefined,

  plugins: [
    new CleanWebpackPlugin(),

    new DefinePlugin({
      'global.GENTLY': false,
    }),

    new Dotenv({
      systemvars: true,
    }),

    new ImageMinimizerPlugin({
      filter: (source) => source.byteLength >= 1012,
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 70, progressive: true }],
          ['pngquant', { quality: [0.3, 0.5], speed: 1 }],
          ['svgo'],
        ],
      },
    }),

    new MiniCssExtractPlugin({
      filename: target === 'web' ? 'main.[contenthash].css' : 'main.css',
    }),

    target === 'web'
    && new SourceMapDevToolPlugin({
      filename: '../sourcemaps/[file].map',
      append: '\n//# sourceMappingURL=http://127.0.0.1:8081/dist/[url]',
    }),

    target === 'web' && new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      threshold: 8192,
      test: /\.(js|css|svg)$/,
    }),

    target === 'web' && new WebpackManifestPlugin(),

    target === 'web'
    && process.env.IS_BUNDLE_ANALYZER_PLUGIN_ENABLED
    && new BundleAnalyzerPlugin(),
  ].filter(Boolean),

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
});

const configs = [
  getConfig('web'),
  getConfig('node'),
];

module.exports = configs;
