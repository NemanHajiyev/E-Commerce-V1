import React from 'react'
import Slider from "react-slick";
import "../../Styles/Slider.css"

const SliderComp = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
    };
    return (
        <div className='slider'>
            <Slider {...settings}>

                <div className='sliders'>
                    <div>
                        <h1>Best Quality Shoose</h1>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, labore. Corrupti dolor culpa possimus laborum aspernatur sunt alias consectetur totam deserunt cum? Voluptates, quod. At ducimus natus mollitia illum molestiae!</p>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png" alt="" />
                </div>

                <div className='sliders' >
                    <div>
                        <h1>Best Quality Shoose</h1>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, labore. Corrupti dolor culpa possimus laborum aspernatur sunt alias consectetur totam deserunt cum? Voluptates, quod. At ducimus natus mollitia illum molestiae!</p>
                    </div>
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png" alt="" />
                </div>

                <div className='sliders'>
                    <div>
                        <h1 >Best Quality Shoose</h1>
                        <br />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, labore. Corrupti dolor culpa possimus laborum aspernatur sunt alias consectetur totam deserunt cum? Voluptates, quod. At ducimus natus mollitia illum molestiae!</p>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e566b6ab-ec2e-411b-b07d-a65fd3a1de33/custom-nike-dunk-low-by-you-su24.png" alt="" />

                </div>


            </Slider>

        </div>
    )
}

export default SliderComp
