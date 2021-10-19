import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
import { initialState } from '../state/state';

const store = createStore(rootReducer, initialState)

export default store;
