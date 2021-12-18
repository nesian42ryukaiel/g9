import { createStore } from "redux"
import rootReducer from "./modules/rootReducer";
import { pServerLink, appdata } from "../pseudoLinks/links";
import axios from "axios";

export default function configureStoreAsync() {
  return new Promise((resolve) => {
    const initialState = initialStoreState;//default initial store state
    try {
      // do some async stuff here to manipulate initial state
      // ...like read from local disk etc. 
      // This is again wrapped in its own Promises.
      axios
        .get(pServerLink + "/" + appdata)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
      console.log(store.getState());
      resolve(store);
    } catch (error) {
      // To do .... log error!
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
      console.log(store.getState());
      resolve(store);
    }
  });
};