import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 });
            }
        }
    }
});


export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
