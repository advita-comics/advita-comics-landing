function isNodeTarget(caller) {
  return Boolean(caller && caller.target === 'node');
}

function getConfig(api) {
  const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  const node = api.caller(isNodeTarget);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: node ? undefined : 'entry',
          corejs: node ? false : '3.15',
          targets: node ? { node: 'current' } : 'defaults',
        },
      ],
      '@babel/preset-react',
    ],

    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      isDevelopment && !node && 'react-refresh/babel',
    ].filter(Boolean),
  };
}

module.exports = getConfig;
