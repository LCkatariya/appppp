import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers:{
        increment: (state)=>{
            state.count += 1;
        },
        dicrement: (state)=>{
            state.count -= 1;
        },
        incrimentByAmount: (state, action)=>{
            // console.log("lalchand", state, action)
            state.count += action.payload
        }
    }
});

export const {increment, dicrement, incrimentByAmount} = counterSlice.actions
export default counterSlice.reducer