import { configureStore } from '@reduxjs/toolkit'
import categorieSlice from './CategorieSlice'
import productSlice from './ProductsSlice'
import basketReducer from './BasketSlice'

export const store = configureStore({
    reducer: {
        categories: categorieSlice,
        products: productSlice,
        basket: basketReducer
    },
})