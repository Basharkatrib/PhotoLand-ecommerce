import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import cartReducer from './cartSlice';
import productSlice from './productSlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';




const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productSlice,
    cart: cartReducer,
    search: searchReducer
  }
});

export default store;
