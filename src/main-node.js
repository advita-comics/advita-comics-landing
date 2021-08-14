import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import RootPage from 'pages/Root';

function renderApp() {
  return Promise.resolve().then(() => {
    const content = ReactDOMServer.renderToString(
      <RootPage />,
    );

    const helmet = Helmet.renderStatic();

    return {
      content,
      helmet,
      initialGlobalState: {},
    };
  });
}

export default renderApp;
