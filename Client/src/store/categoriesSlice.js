import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCategory } from '../services/FetchCategory'; 


const selected = localStorage.getItem('set') !== null ? JSON.parse(localStorage.getItem('set')) : null;


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await FetchCategory(); 
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching categories");
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle', 
    error: null,
    setCategory: selected
  },
  reducers: {
    setCateg: (state, action) => {
      state.setCategory = action.payload;
      localStorage.setItem('set', JSON.stringify(state.setCategory));
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { setCateg } = categoriesSlice.actions;
export default categoriesSlice.reducer;
