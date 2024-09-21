import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice"
export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

// export rootstate hrer 
export type RootState = ReturnType<typeof store.getState>