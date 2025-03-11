import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import cartReducer from './cartSlice';
import productSlice from './productSlice';
import productsReducer from './productsSlice';



const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    product: productSlice,
    cart: cartReducer,
  }
});

export default store;
