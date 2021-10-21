/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Root Reducer: named as modules/index in Ducks pattern
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

import { combineReducers } from "redux";
import inputReducer from "./input";
import membershipReducer from "./membership";

const rootReducer = combineReducers({
  membershipReducer // , routerReducer
});

export default rootReducer;
