import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data : "",
  },
  reducers: {
    searchItem: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;