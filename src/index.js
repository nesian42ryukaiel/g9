import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import { initialState } from './state/state';
import rootReducer from './reducers/rootReducer';
import App from './components/App'; // should be containers, apparently

import './css/index.css';

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
