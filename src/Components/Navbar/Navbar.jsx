import React, { useState } from 'react';
import '../../Styles/Navbar.css'
import { GrBasket } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";


const Navbar = () => {
    const { products } = useSelector((store) => store.basket);
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div className={`Navbar-Comp ${darkMode ? 'dark' : 'light'}`}>
            <div className='navbar-left' onClick={() => navigate('/')}>
                <img className='logo' src="https://img.freepik.com/premium-photo/close-up-colorful-bird-with-long-beak-generative-ai_1035763-2814.jpg?w=360" />
                <h1>Shop Zone</h1>
            </div>
            <div className='navbar-right'>

                <div className='basket-div'>
                    {darkMode ? (
                        <IoSunnyOutline onClick={changeTheme} className='icon' />
                    ) : (
                        <IoMoonOutline onClick={changeTheme} className='icon' />
                    )}
                    <GrBasket onClick={() => navigate("/basket")} className='icon' />
                    <div className='item'>{products.length}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;