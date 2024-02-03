import { configureStore } from '@reduxjs/toolkit'
import { Changeclr } from './ColorChange'
import {TodoSlice} from './Todos'
//acts like a warehouse conatains apis etc  
export const store = configureStore({
    reducer:{
        'Changeclr':Changeclr.reducer,
        [TodoSlice.name] : TodoSlice.reducer

    }
})

//reducer is a action or a function