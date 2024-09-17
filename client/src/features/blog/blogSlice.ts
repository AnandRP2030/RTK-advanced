import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Blog } from "../../types";
import { sub } from "date-fns";
const initialState: Blog[] = [
  {
    id: "1",
    userId: "",
    title: "Blog 1",
    content: "Content 1",
    date: sub(new Date(), { minutes: 0 }).toISOString(),
  },
];

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      const { title, content, userId } = action.payload;
      const id = nanoid();
      const date = sub(new Date(), { minutes: 0 }).toISOString();
      const newBlog = {
        id,
        userId,
        date,
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
