import { createSelector, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cart.actions;
export const cartSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export default cart.reducer;
