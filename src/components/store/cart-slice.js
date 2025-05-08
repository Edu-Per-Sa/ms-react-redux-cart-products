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
        const itemSended = action.payload.item;

        const indexItem = state.items.findIndex((item) => item.id === itemSended.id );

        if (indexItem >= 0) {
            state.items[indexItem].quantity += 1;
        } else {
            state.items.unshift({...action.payload.item, quantity: 1});
        }

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
