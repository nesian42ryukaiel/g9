import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM, { render } from 'react-dom';

import store from './store/store';
import App from './components/App'; // should be containers, apparently

import './css/index.css';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
