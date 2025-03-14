import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchProducts } from '../services/FetchProducts'; 


const prod = localStorage.getItem('prod') !== null ? JSON.parse(localStorage.getItem('prod')) : [];


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
    products: prod,
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
        localStorage.setItem('prod', JSON.stringify(state.products));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});


export default productSlice.reducer;
