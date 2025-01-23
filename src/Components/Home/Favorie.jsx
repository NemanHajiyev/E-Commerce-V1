import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavorieProducts from '../Pages/FavorieProducts';
import { favorieProduct } from '../../Redux/BasketSlice';


const Favorie = () => {
    const { products } = useSelector((store) => store.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(favorieProduct());
    }, [products]);

    if (!products.length) {
        return <div>No favorite products yet.</div>;
    }

    return (
        <div>
            {products.map((product) => (
                <FavorieProducts key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Favorie;
