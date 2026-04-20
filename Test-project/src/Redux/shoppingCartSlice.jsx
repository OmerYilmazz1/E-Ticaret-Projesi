import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const shoppingCartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        state.count += 1;
    },
  },
})

export const {increment} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer