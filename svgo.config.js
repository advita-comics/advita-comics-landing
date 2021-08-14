const config = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: {
            active: false,
          },
          addAttributesToSVGElement: {
            attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
          },
        },
      },
    },
  ],
};

module.exports = config;
