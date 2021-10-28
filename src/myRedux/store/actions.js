// @ts-nocheck
import { ADD_TODO_, TOGGLE_TODO_, SET_VISIBILITY_FILTER } from "./constance";
let nextTodoId = 1;

export const addTodo = (param) => {
  return {
    type: ADD_TODO_,

    text: param,
    id: nextTodoId++,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO_,
    id,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};
