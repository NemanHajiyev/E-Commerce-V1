import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsDetails } from '../../Redux/ProductsSlice'
import ProductDetil from '../Home/ProductDetil'

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { productDetail } = useSelector(store => store.products)

    useEffect(() => {
        dispatch(getProductsDetails(id))
    }, [dispatch, id])

    return (
        <div>
            <ProductDetil productDetail={productDetail} />
        </div>
    )
}

export default Detail
