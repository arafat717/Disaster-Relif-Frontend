// toggleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light", // Updated default theme assignment
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = toggleSlice.actions;

export default toggleSlice.reducer;
