import { createSlice } from "@reduxjs/toolkit";

function saveCartLocalStore(cartItems) {
    localStorage.setItem("myCart", JSON.stringify(cartItems));
}

const initialCartState = {
    showCart: true,
    items: localStorage.getItem("myCart") ? JSON.parse(localStorage.getItem("myCart")) : [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem: (state, action) => {
            const itemSended = action.payload.item;
            const indexItem = state.items.findIndex((item) => item.id === itemSended.id);
            if (indexItem >= 0) {
                state.items[indexItem].quantity += 1;
            } else {
                state.items.push({ ...action.payload.item, quantity: 1 });
            }
            saveCartLocalStore(state.items);
        },
        removeItem: (state, action) => {
            const idSended = action.payload.id;
            const indexItem = state.items.findIndex((item) => {
                return item.id === idSended
            })

            if (state.items[indexItem].quantity > 1) {
                state.items[indexItem].quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
            saveCartLocalStore(state.items);
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
