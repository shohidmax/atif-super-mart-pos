import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className='capitalize mx-auto m-2 text-2xl '>This is home section  </h1>
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