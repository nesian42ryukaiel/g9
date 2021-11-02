import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './modules/rootReducer';
import AppContainer from './containers/AppContainer';
import App from './components/App';

import './css/index.css';

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
