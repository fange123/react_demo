// @ts-nocheck
import { SET_VISIBILITY_FILTER } from "./constance";
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
