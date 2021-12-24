import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux"
import rootReducer from "./modules/rootReducer";
import AppContainer from "./containers/AppContainer";
import configureStoreAsync from "./modules/configureStoreAsync";
import "./css/index.css";

// import serverLink from "./pseudoLinks/links"; // test purposes

//const store = createStore(rootReducer); // should I move this to configureStoreAsync?
//console.log(store.getState());

configureStoreAsync().then(result => {
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

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppContainer />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// createStore(rootReducer).then(result => {
//   const store = result;
//   console.log(store.getState());
//   return ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// });
