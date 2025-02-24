import React, { useState } from 'react';
import '../../Styles/Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { favorieProduct } from '../../Redux/BasketSlice';
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector(state => state.basket.favorites);
    const isFavorite = favorites.some(fav => fav.id === product.id);

    const [isActive, setIsActive] = useState(isFavorite);
    const { title, id, image, price } = product;

    const addFavorie = () => {
        setIsActive(!isActive);
        dispatch(favorieProduct());
    };


    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} className='image' alt={title} />
                <div>
                    <FaRegHeart
                        style={{ fontSize: "20px" }}
                        onClick={addFavorie}
                        className={isActive ? "active" : "inactive"} />
                </div>
            </div>
            <div>
                <p className='title'>{title}</p>
                <h3 style={{ textAlign: "center" }}>{price} $</h3>
                <div>
                    <button
                        onClick={() => navigate(`/detail/${id}`)}
                        className='button'>
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
