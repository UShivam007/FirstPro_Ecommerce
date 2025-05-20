import { configureStore } from '@reduxjs/toolkit'
import CartReducers from './Slices/CartSlice'


export const store = configureStore({
  reducer: {
    cart:CartReducers,
  },
})