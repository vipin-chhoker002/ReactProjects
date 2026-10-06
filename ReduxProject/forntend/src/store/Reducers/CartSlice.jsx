import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    carts: [],
}
const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        loadCart: (state, actions) => {
            state.carts = actions.payload;
        }
    }
})
export default cartSlice.reducer
export const { loadCart } = cartSlice.actions