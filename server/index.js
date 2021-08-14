require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const isProduction = process.env.NODE_ENV === 'production';

// eslint-disable-next-line import/no-unresolved
const manifest = isProduction ? require('../dist/web/manifest.json') : null;
// eslint-disable-next-line import/no-unresolved
const renderApp = isProduction ? require('../dist/node/main.js').default : null;

async function runApplication() {
  const app = express();
  const port = process.env.PORT || 3000;
  // const host = process.env.LISTEN_HOST || '127.0.0.1';

  app.disable('x-powered-by');

  if (isProduction) {
    app.use(morgan('combined'));
  } else {
    app.use(morgan('dev'));
  }

  app.use(cors(config.cors));

  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));

  app.use('/dist/web', express.static(path.resolve(__dirname, '../dist/web')));
  app.use(express.static(path.resolve(__dirname, '../public')));

  app.set('views', __dirname);
  app.set('view engine', 'ejs');

  app.get('*', async (request, response) => {
    const params = await renderApp(request, response);

    if (params) {
      response.render('index', {
        manifest,
        ...params,
      });
    }
  });

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on ${port}`);
  });
}

runApplication();
