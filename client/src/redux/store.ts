import {themeSlice} from "@/feature/ThemeSlice";
import {configureStore} from "@reduxjs/toolkit";
import type {ThemeState} from "@/feature/ThemeSlice";

const THEME_KEY = "theme_mode";

const getInitialTheme = (): ThemeState["mode"] => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "dark" || saved === "light" ? saved : "light";
};

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice.reducer,
  },
  preloadedState: {
    themeSlice: {
      mode: getInitialTheme(),
    },
  },
});

store.subscribe(() => {
  if (typeof window === "undefined") return;
  const mode = store.getState().themeSlice.mode;
  localStorage.setItem(THEME_KEY, mode);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
