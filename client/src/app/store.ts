import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer
  },
});

export type RootState = ReturnType<typeof store.getState>