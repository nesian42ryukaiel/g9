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

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * json-server test area begin
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

const getData = (link) => {
  fetch((link)
  , {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    console.log('Final text data below:');
    console.log(myJson.text);
  })
}

getData(serverLink);

/**
* -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
* json-server test area end
* -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
