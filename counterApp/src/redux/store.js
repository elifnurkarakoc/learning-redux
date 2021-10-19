import { configureStore } from "@reduxjs/toolkit";
import { default as counterReducer } from "./counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
