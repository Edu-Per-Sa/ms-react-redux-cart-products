import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    showCart: true,
    items: [],
}


const cartSlice = createSlice({
name: 'cart',
initialState: initialCartState,
reducers: {
    addItem: (state, action) => {
        state.items = state.items.shift(action.payload.item);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    toogleShowHiddeCart: (state) => {
        state.showCart = !state.showCart;
    },
}
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
