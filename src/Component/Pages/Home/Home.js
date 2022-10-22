import React from 'react';
import Loadcomponent from '../../Utilitis/Loadcomponent';
import Loading from '../../Utilitis/Loading';
import LoadVlogs from '../../Utilitis/LoadVlogs';
import Processing from '../../Utilitis/Processing';
import Progrss from '../../Utilitis/Progrss';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='p-2'>
            <Slider></Slider>
            <Processing></Processing>
            <Loadcomponent></Loadcomponent>
            <Loading></Loading>
            <Progrss></Progrss>
            <LoadVlogs></LoadVlogs>
        </div>
    );
};

export default Home;




// <div>
//             <a href="#my-modal-2" className="btn">open modal</a>
//             <a href="#Supplier-modal" className="btn">open supp</a>
//             <a href="#Group-modal" className="btn">Group supp</a>
//             <a href="#Product-modal" className="btn">product supp</a>
//             <a href="#Products-modal" className="btn">products supp</a>
//             <a href="#Brand-modal" className="btn">Brand </a>
//             <a href="#SaleModal" className="btn">sale  </a>
//     </div>