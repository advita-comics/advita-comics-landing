const cors = {
  origin: process.env.ALLOWED_CORS_ORIGINS.split(','),
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

module.exports = cors;
