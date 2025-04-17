import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProduct } from '../services/FetchProduct';


export const fetchProduct = createAsyncThunk('users/fetchUsers', async (id) => {
  const response = await FetchProduct(id);
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;