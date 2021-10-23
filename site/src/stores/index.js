import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./site";
export const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});
