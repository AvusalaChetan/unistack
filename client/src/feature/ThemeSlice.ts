import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface ThemeState {
  mode: "light" | "dark";
}

const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeState["mode"]>) => {
      state.mode = action.payload;
    },
    toggleMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const {setMode, toggleMode} = themeSlice.actions;

export default themeSlice.reducer;
