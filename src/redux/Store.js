import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: (state,action) =>{
        if(action.type == "Login")
        {
            const {firstName , lastName}  = action.payload.myData;
                    return {
                ...state,
                user: {firstName : firstName, lastName : lastName }
            }
        } else {
            return state;
        }
    },
    preloadedState: { 
        user : {firstName : "Unknown", lastName : "user"}
    }
})