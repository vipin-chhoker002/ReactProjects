import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    Products: [],
}
const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        loadProducts: (state, actions) => {
            state.Products = actions.payload;
        }
    }
})
export default productSlice.reducer
export const { loadProducts } = productSlice.actions