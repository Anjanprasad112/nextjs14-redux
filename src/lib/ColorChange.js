import { createSlice } from "@reduxjs/toolkit";
export const Changeclr = createSlice({
    name: "changeclr",
    initialState:{
        color : '#000'
    },
    reducers : {
        ChangeClrtoClr(state,action){
            state.color = action.payload
        }
    }
})

export const {ChangeClrtoClr} = Changeclr.actions;