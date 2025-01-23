import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from '../Utils/Status'

const initialState = {
    products: [],
    productsSatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}
export const getProducts = createAsyncThunk("getproducts", async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data
})

export const getCategorieProducts = createAsyncThunk("categorieproducts", async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data
})

export const getProductsDetails = createAsyncThunk("getproductdetails", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getProducts.pending, (state, action) => {
                state.productsSatus = STATUS.LOADING
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsSatus = STATUS.SUCCESS
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productsSatus = STATUS.FAIL
            })

            .addCase(getProductsDetails.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING
            })

            .addCase(getProductsDetails.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS
                state.productDetail = action.payload
            })
            .addCase(getProductsDetails.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL
            })
            .addCase(getCategorieProducts.pending, (state, action) => {
                state.productsSatus = STATUS.LOADING
            })

            .addCase(getCategorieProducts.fulfilled, (state, action) => {
                state.productsSatus = STATUS.SUCCESS
                state.products = action.payload
            })
            .addCase(getCategorieProducts.rejected, (state, action) => {
                state.productsSatus = STATUS.FAIL
            })
    }
})

export default productSlice.reducer
