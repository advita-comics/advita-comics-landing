require('dotenv').config();

const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

// eslint-disable-next-line import/no-unresolved
const manifest = isProduction ? require('../dist/manifest.json') : null;
// eslint-disable-next-line import/no-unresolved
const renderApp = isProduction ? require('../dist/ssr').default : null;

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/assets', express.static(path.resolve(__dirname, '../dist')));

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('*', (request, response) => {
  renderApp(request, response).then((params) => {
    response.render('index', {
      manifest,
      ...params,
    });
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}`);
});
