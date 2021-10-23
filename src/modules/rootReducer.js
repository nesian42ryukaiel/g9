/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Root Reducer: named as modules/index in Ducks pattern
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

import { combineReducers } from "redux";
import membership from "./membership";
import pages from "./pages";

const rootReducer = combineReducers({
  membership,
  pages
});

export default rootReducer;
