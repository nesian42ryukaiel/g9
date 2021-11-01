/**
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 * Root Reducer: named as modules/index in Ducks pattern
 * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- * -=-|-=- *
 */

import { combineReducers } from "redux";
import editor from "./editor";
import membership from "./membership";
import pages from "./pages";

const rootReducer = combineReducers({
  editor,
  membership,
  pages
});

export default rootReducer;
