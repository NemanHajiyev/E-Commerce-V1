import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/CategorieSlice'
import '../../Styles/Category.css'

const Categories = ({ setCategory }) => {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.categories);


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='category-div'>
            <h1>Categories</h1>
            {
                categories?.map((category, i) => (
                    <div onClick={() => setCategory(category)} key={i} className='category-title'>{category}</div>
                ))
            }
        </div>
    )
}

export default Categories
