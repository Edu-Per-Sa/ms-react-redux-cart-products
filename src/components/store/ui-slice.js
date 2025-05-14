import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: true,
    fetchingProducts: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setFetchingProducts(state, action) {
            state.fetchingProducts = action.payload;
        },
        toogleShowHiddeCart: (state) => {
            state.showCart = !state.showCart;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;