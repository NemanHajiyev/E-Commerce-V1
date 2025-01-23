import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { favorieProduct } from '../../Redux/BasketSlice';

const FavorieProducts = ({ product }) => {
    const { id, image, title } = product;
    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(favorieProduct({ id }));

    }, [])



    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};


export default FavorieProducts;
