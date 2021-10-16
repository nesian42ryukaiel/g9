import { combineReducers, createStore } from "redux";
import membershipReducer from "./membershipReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  membershipReducer,
  inputReducer
});

export default rootReducer;
