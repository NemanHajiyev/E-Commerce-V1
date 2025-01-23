import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getCategorieProducts } from '../../Redux/ProductsSlice'
import Loading from '../Pages/Loading'
import ReactPaginate from 'react-paginate';
import Product from '../Pages/Product'
import '../../Styles/Product.css'

const Products = ({ category, select }) => {

    const [itemOffset, setItemOffset] = useState(0);
    const dispatch = useDispatch();
    const { products, productsSatus } = useSelector(store => store.products);


    useEffect(() => {
        if (category) {
            dispatch(getCategorieProducts(category))
        } else {
            dispatch(getProducts())
        }
    }, [dispatch, category])

    //PAGINATE --- 
    const itemsPerPage = 6
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className='Products-Div'>
            {
                currentItems?.sort((a, b) => select == "inc" ? a.price - b.price : select == "dec" ? b.price - a.price : "null")?.map((product, i) => (
                    <Product key={i} product={product} />
                ))
            }
            <div>
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default Products
