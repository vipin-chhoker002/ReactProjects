import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdata: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, actions) => {
            state.userdata = actions.payload
        },
        removeUser: (state, action) => {
            state.userdata = null
        }
    },
})
export const { loadUser, removeUser } = userSlice.actions
export default userSlice.reducer