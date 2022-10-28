import React from 'react';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='p-2'>
            <Slider></Slider>
            

    <div>
            <a href="#my-modal-2" className="btn">open modal</a>
            <a href="#Supplier-modal" className="btn">open supp</a>
            <a href="#Group-modal" className="btn">Group supp</a>
            <a href="#Product-modal" className="btn">product supp</a>
            <a href="#Products-modal" className="btn">products supp</a>
            <a href="#Brand-modal" className="btn">Brand </a>
            <a href="#SaleModal" className="btn">sale  </a>
    </div>
        </div>
    );
};

export default Home;


