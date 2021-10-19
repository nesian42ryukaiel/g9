import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

import rootReducer from './reducers/rootReducer';
import App from './containers/App';

import './css/index.css';

const initialState = {
  login: false,
  id: '',
  password: '',
  articles: []
}

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
