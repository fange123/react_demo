// @ts-nocheck

import { ADD_TODO_, TOGGLE_TODO_ } from "./constance";
const initState = [
  {
    text: "HTML",
    completed: false,
    id: 0,
  },
];
const todo = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO_:
      return [...state, { text: action.text, completed: false, id: action.id }];

    case TOGGLE_TODO_:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todo;
