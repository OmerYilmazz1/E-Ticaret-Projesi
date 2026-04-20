import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/shoppingCartSlice'
import productReducer from '../Redux/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer
  },
})