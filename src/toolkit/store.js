import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from './dataApi/dataApi';
import cartReducer  from './cartSlice/cartSlice'; 

export const store = configureStore({
    reducer: {
        [dataApi.reducerPath]: dataApi.reducer,
        cart: cartReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataApi.middleware),
});
