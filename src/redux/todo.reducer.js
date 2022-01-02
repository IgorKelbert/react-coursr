import { createSlice } from "@reduxjs/toolkit"

export const toDoReducer = createSlice({
    name: 'toDo',
    initialState: [] ,
    reducers: {
        setData: ( state, action) => {
            state = action.payload;
        }

    }
});