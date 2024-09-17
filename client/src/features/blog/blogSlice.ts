import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
const initialState = [
  { id: "1", title: "Blog 1", content: "Content 1" },
];

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const { title, content } = action.payload;
      const newBlog = {
        id: nanoid(),
        title,
        content,
      };
      // redux toolkit use immer js library under the hood, so directly mutate the state is not a problem here.
      state.push(newBlog);
    },
  },
});

// initial state structure might change in future, everytime it  changes its hard to change it on every component,
// so we export a function that select all the blogs from the state. if we change the initial state structure,
// then we only need to change this function. not in every component.
export const selectAllBlogs = (state: RootState) => state.blogs;

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
