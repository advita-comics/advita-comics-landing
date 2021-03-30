const plugins = {
  production: {
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
    'postcss-pxtorem': {
      propList: ['*'],
    },
  },
  development: {},
};

const config = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
    },
    ...(process.env.NODE_ENV === 'production' ? plugins.production : {}),
  },
};

module.exports = config;
