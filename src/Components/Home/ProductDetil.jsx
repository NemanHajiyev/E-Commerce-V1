import React, { useState } from 'react'
import '../../Styles/productDetail.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToBasket, calculateBasket } from "../../Redux/BasketSlice"


const ProductDetil = ({ productDetail }) => {
    const { id, title, image, price, description } = productDetail
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }

    return (
        <div className='product-detail'>
            <img src={image} alt="" />
            <div className='title-div'>
                <div>
                    <h1>{title}</h1>
                    <h2 className='h2-price'>{price} $</h2>
                    <p className='p-desc'>{description}</p>
                </div>
                <div className='icons'>
                    <FaPlus onClick={increment} />
                    <span >{count}</span>
                    <FaMinus onClick={decrement} />
                </div>
                <button
                    onClick={addBasket}
                    className='basket-btn'>Add Basket</button>
            </div>

        </div>
    )
}

export default ProductDetil
