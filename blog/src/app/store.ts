import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    users: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

