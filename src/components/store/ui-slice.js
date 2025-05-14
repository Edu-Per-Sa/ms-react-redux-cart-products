import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: true,
    showInfoApp: true,
    fetchingProducts: false,
    infoEN: true,
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
        showInfoApp: (state) => {
            state.showInfoApp = true;
        },
        hiddeInfoApp: (state) => {
            state.showInfoApp = false;
        },
        setLanguageInfo: (state) => {
            state.infoEN = state.infoEN ? false : true;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;