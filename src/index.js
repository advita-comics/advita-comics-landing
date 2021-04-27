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

ReactDOM.render(<Application />, document.getElementById('root'));
