import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/UserSlice';
import productSlice from './Reducers/ProductSlice';
import cartSlice from './Reducers/CartSlice';

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        ProductReducer: productSlice,
        CartRedcucer: cartSlice

    }
})