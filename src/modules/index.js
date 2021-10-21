/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Root Reducer: named as modules/index in Ducks pattern
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

import { combineReducers } from "redux";
import inputReducer from "./input";
import membershipReducer from "./membership";

const rootReducer = combineReducers({
  inputReducer,
  membershipReducer
});

export default rootReducer;
