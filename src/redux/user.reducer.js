import { createSlice } from "@reduxjs/toolkit"

export const userReducer = createSlice({
    name: 'user',
    initialState: {firstName : "Unknown", lastName : "user"} ,
    reducers: {
        setUser: ( state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }

    }
});