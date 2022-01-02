import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: (previouseValue) =>previouseValue,
    preloadedState: { 
        user : {firstName : "Unknown", lastName : "user"}
    }
})