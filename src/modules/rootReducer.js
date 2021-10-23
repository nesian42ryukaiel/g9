/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Root Reducer: named as modules/index in Ducks pattern
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

import { combineReducers } from "redux";
import membershipReducer from "./membership";
import pagesReducer from "./pages";

const rootReducer = combineReducers({
  membership: membershipReducer,
  pages: pagesReducer
});

export default rootReducer;
