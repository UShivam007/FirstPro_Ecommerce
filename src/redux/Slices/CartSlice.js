import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProduct} = CartSlice.actions

export default CartSlice.reducer