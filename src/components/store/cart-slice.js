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
            const indexItem = state.items.findIndex((item) => item.id === itemSended.id);

            if (indexItem >= 0) {
                state.items[indexItem].quantity += 1;
            } else {
                state.items.push({ ...action.payload.item, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const idSended = action.payload.id;
            const indexItem = state.items.findIndex((item, index, obj) => {
                console.log('Obj --> ', obj);
                return item.id === idSended
            })

            if (state.items[indexItem].quantity > 1) {
                state.items[indexItem].quantity -= 1;
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            }
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
