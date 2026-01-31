import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





export const fetchProduct = createAsyncThunk(
  'product/productList',
  async (url, thunkAPI) =>{
    try {
      const res = await fetch(url)
      return res.json()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

const productList = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchProduct.pending, (state)=>{
      state.loading = true,
      state.error = null
    });

    builder.addCase(fetchProduct.fulfilled, (state, action)=>{
      state.loading=false,
      state.data = action.payload
    });

    builder.addCase(fetchProduct.rejected, (state, action)=>{
      state.loading=false
      state.error = action.payload
    });
  }
});

export default productList.reducer;

















// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // 1) Async thunk
// export const fetchUser = createAsyncThunk(
//   'user/fetchUser',
//   async (id, thunkAPI) => {
//     try {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//       return await res.json();   // <-- this becomes action.payload
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },

//   // 2) extraReducers handles asyncThunk states
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })

//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;
