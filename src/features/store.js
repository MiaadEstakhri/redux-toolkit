import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
