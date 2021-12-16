export default function configureStoreAsync() {
  return new Promise((resolve) => {
    const initialState = initialStoreState;//default initial store state
    try {
      // do some async stuff here to manipulate initial state
      // ...like read from local disk etc. 
      // This is again wrapped in its own Promises.
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
      resolve(store);
    } catch (error) {
      // To do .... log error!
      const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
      console.log(store.getState());
      resolve(store);
    }
  });
};