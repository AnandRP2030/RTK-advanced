import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialStateType {
  user: any;
  loading: "idle" | "loading" | "fulfilled" | "rejected";
  error: any;
}

const initialState: InitialStateType = {
  user: null,
  loading: "idle", // idle, pending, fulfilled, rejected
  error: null,
};

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (userId: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    console.log("resss", res);
    return res.data;
  }
);
console.log("fetch user", fetchUserById.pending);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = "idle";
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
