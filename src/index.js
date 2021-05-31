import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import RootPage from 'pages/Root';
import './styles/index.css';

function Application() {
  useEffect(() => {
    ReactModal.setAppElement(document.getElementById('root'));
  }, []);

  return (
    <StrictMode>
      <RootPage />
    </StrictMode>
  );
}

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<Application />, document.getElementById('root'));
} else if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(<Application />, document.getElementById('root'));
}
