import { createSlice } from '@reduxjs/toolkit';

const itemss = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const totalPricee =localStorage.getItem('totalPrice') !== null ? JSON.parse(localStorage.getItem('totalPrice')) : 0; 

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: itemss,
    totalPrice: totalPricee,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;

      localStorage.setItem('cartItems', JSON.stringify(state.items.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));

    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== action.payload);
        state.totalPrice -= item.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeAll: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem('cartItems', JSON.stringify(state.items.map(item => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem, removeAll } = cartSlice.actions;
export default cartSlice.reducer;