import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import AppContainer from "./containers/AppContainer";
// import configureStoreAsync from "./modules/configureStoreAsync";
import { pServerLink, artdata } from "./pseudoLinks/links";
import axios from "axios";
import "./css/index.css";

const initialStoreState = {
  editor: {
    uploader: {
      ufile: "",
      utitle: "",
      utext: "",
    },
    editor: {
      efile: "",
      etitle: "",
      etext: "",
    },
  },
  membership: {
    loggedin: false,
    id: "",
    password: "",
    members: {},
  },
  pages: {
    currentPage: "index",
    articles: [],
  },
};

function configureStoreAsync() {
  return new Promise((resolve) => {
    let initialState = initialStoreState; //default initial store state
    try {
      // do some async stuff here to manipulate initial state
      // ...like read from local disk etc.
      // This is again wrapped in its own Promises.
      axios
        .get(pServerLink + "/" + artdata)
        .then(function (response) {
          // console.log("RSP: " + JSON.stringify(response));
          // console.log("RSD: " + JSON.stringify(response.data));
          initialState.pages.articles = JSON.parse(
            JSON.stringify(response.data)
          );
          // console.log("new initialState: " + initialState)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
          const store = createStore(rootReducer, initialState);
          // console.log(store.getState());
          resolve(store);
        });
    } catch (error) {
      // To do .... log error!
      const store = createStore(rootReducer, initialState);
      console.log(store.getState());
      resolve(store);
    }
  });
}

configureStoreAsync().then((result) => {
  const store = result;
  console.log(store.getState());
  return ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * basic react-redux structure below
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppContainer />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
