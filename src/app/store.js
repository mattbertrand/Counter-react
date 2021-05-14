import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/counter/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
});
