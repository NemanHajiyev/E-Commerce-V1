import React, { useEffect } from 'react'
import '../../Styles/Basket.css'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, removeBasketItem } from '../../Redux/BasketSlice'

const BasketElement = ({ product }) => {
    const { id, image, title, price, count } = product;
    const dispatch = useDispatch();

    const removeElement = () => {
        dispatch(removeBasketItem({ id }));
        dispatch(calculateBasket());
    };

    return (
        <div key={id} className='basket'>
            <div className='left'>
                <img src={image} alt="" />
                <h1>{title} - ({count})</h1>
                <h2></h2>
            </div>
            <div className='right'>
                <h2>{price} $</h2>
                <button onClick={removeElement}>Sil</button>
            </div>
        </div>
    );
};


export default BasketElement
