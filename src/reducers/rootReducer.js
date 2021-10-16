import { combineReducers, createStore } from "redux";
import membershipReducer from "./membershipReducer";

const rootReducer = combineReducers({
  membershipReducer
});

export default rootReducer;
