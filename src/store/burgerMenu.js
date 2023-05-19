import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const burgerChange = createSlice({
  name: "burger change",
  initialState,
  reducers: {
    burgerChangeActionCreator: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { burgerChangeActionCreator } = burgerChange.actions;
