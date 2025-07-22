// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
    mode: "light" | "dark";
};

const initialState: AppState = {
    mode: "light", // Default mode
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const selectMode = (state: {app: AppState}) => state.app.mode;
export const { setMode } = appSlice.actions;

export default appSlice.reducer;