import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react';
import { userReducer } from './user.reducer'
import { toDoReducer } from './todo.reducer'

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
        toDo: toDoReducer.reducer
    }
})