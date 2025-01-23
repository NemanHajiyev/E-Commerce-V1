import React, { useState } from 'react'
import '../../Styles/Home.css'
import SliderComp from '../Home/SliderComp';
import Select from '../Home/Select';
import Categories from '../Home/Categories';
import Products from '../Home/Products';



const Home = () => {
    const [select, setSelect] = useState('');
    const [category, setCategory] = useState('');
    return (
        <div className='home-comp'>
            <SliderComp />
            <Select setSelect={setSelect} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
                <Categories setCategory={setCategory} />
                <Products select={select} category={category} />
            </div>
        </div>
    )
}

export default Home
