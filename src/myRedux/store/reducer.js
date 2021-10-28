// @ts-nocheck

import { combineReducers } from "redux";
import todos from "./todo";
import visibilityFilter from "./visibilityFilter.js";

const index = combineReducers({
  todos,
  visibilityFilter,
});

export default index;
