import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import productList from './slices/productListSlice'



export const store = configureStore({
    reducer: {
        count: counterSlice,
        productList: productList
    }
})