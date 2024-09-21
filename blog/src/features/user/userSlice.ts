import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../types";



const initialState: User[] = [
  { id: "1", name: "mark" },
  { id: "2", name: "elon" },
];
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllusers = (state: RootState) => state.users;
export default userSlice.reducer;
