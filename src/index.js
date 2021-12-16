import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './modules/rootReducer';
import AppContainer from './containers/AppContainer';

import './css/index.css';

import serverLink from './pseudoLinks/links'; // test purposes

const store = createStore(rootReducer);
console.log(store.getState());

// probably the point in which you call the true initState async...

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
