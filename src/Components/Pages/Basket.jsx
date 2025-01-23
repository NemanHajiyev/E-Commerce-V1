import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketElement from './BasketElement';
import { calculateBasket } from '../../Redux/BasketSlice';


const Basket = () => {
    const { products, totalamount } = useSelector((store) => store.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateBasket());
    }, [products, dispatch]);

    return (
        <div>
            {
                products?.map((product) => (
                    <BasketElement key={product.id} product={product} totalamount={totalamount} />
                ))
            }
            <h2 style={{ margin: "30px 0px", color: "red", fontSize: "30px" }}>Totoal Price : {totalamount.toFixed(2)} $</h2>
        </div>
    )
}

export default Basket
