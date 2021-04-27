const path = require('path');

const plugins = {
  production: {
    autoprefixer: {},
    'postcss-pxtorem': {
      propList: ['*'],
    },
    cssnano: {
      preset: 'default',
    },
  },
  development: {},
};

const config = {
  plugins: {
    'postcss-import': {
      path: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    'postcss-preset-env': {
      stage: 0,
      preserve: false,
    },
    ...(process.env.NODE_ENV === 'production' ? plugins.production : {}),
  },
};

module.exports = config;
