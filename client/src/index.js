import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';
import "materialize-css/dist/css/materialize.min.css";

ReactDOM.render(
  <HttpsRedirect>
  {/* <React.StrictMode> */}
    <App />
  {/* <HttpsRedirect/> */}
  </HttpsRedirect>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
