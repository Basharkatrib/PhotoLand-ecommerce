import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProducts } from '../services/FetchProducts'; 


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (categoryId, { rejectWithValue }) => {
    try {
      const data = await FetchProducts(categoryId); 
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching Products");
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle', 
    error: null
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});


export default productSlice.reducer;
