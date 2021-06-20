import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // we need to import react when we use strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // to render the root element from index.html
  , document.getElementById('root')
);


