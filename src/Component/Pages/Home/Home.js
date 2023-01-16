import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const [salese, setSales] = useState([]);
    const rolex = [
        {
            "_id": "6368f9f16976c7c1efd364e1",
            "date": "2022-11-01",
            "name": "2022-11-01",
            "about": "ouioui"
        },
        {
            "_id": "6368f9f86976c7c1efd364e2",
            "date": "2022-11-01",
            "name": "2022-11-01",
            "about": "dfsdf"
        },
        {
            "_id": "6368f9fd6976c7c1efd364e3",
            "date": "2022-11-02",
            "name": "2022-11-02",
            "about": "sdfsdfs"
        },
        {
            "_id": "6368fa026976c7c1efd364e4",
            "date": "2022-11-02",
            "name": "2022-11-02",
            "about": "fsdfsdf"
        },
        {
            "_id": "6368fa086976c7c1efd364e5",
            "date": "2022-11-03",
            "name": "2022-11-03",
            "about": "fdsdf"
        },
        {
            "_id": "6368fc396976c7c1efd364e6",
            "date": "2022-11-09",
            "name": "2022-11-09",
            "about": "sdfsdfd"
        },
        {
            "_id": "6368fc456976c7c1efd364e7",
            "date": "2022-11-09",
            "name": "2022-11-09",
            "about": "fgfg"
        },
        {
            "_id": "6368fc4b6976c7c1efd364e8",
            "date": "2022-11-11",
            "name": "2022-11-11",
            "about": "fgfg"
        },
        {
            "_id": "6368fc556976c7c1efd364e9",
            "date": "2022-11-12",
            "name": "2022-11-12",
            "about": "fgfg"
        },
        {
            "_id": "6368fc616976c7c1efd364ea",
            "date": "2022-11-14",
            "name": "2022-11-14",
            "about": "sdfsdfd"
        },
        {
            "_id": "6368fc6a6976c7c1efd364eb",
            "date": "2022-11-11",
            "name": "2022-11-11",
            "about": "sdfsdfd"
        },
        {
            "_id": "6368fc736976c7c1efd364ec",
            "date": "2022-11-19",
            "name": "2022-11-19",
            "about": "sdfsdfd"
        },
        {
            "_id": "6368fca26976c7c1efd364ed",
            "date": "2022-11-13",
            "name": "2022-11-13",
            "about": "fsdf"
        },
        {
            "_id": "6368fccf6976c7c1efd364ee",
            "date": "2022-11-16",
            "name": "2022-11-16",
            "about": "asdasdas"
        },
        {
            "_id": "6368fcd66976c7c1efd364ef",
            "date": "2022-11-17",
            "name": "2022-11-17",
            "about": "sdasdasdsd"
        },
        {
            "_id": "6368fce06976c7c1efd364f0",
            "date": "2022-11-17",
            "name": "2022-11-17",
            "about": "dasdsas"
        },
        {
            "_id": "6368fce96976c7c1efd364f1",
            "date": "2022-11-15",
            "name": "2022-11-15",
            "about": "sdasdasd"
        },
        {
            "_id": "63690e92b2c3f18ecda520b0",
            "date": "2022-11-01",
            "name": "sadasdad",
            "about": "asdasdasd"
        },
        {
            "_id": "63690ec7b2c3f18ecda520b1",
            "date": "2022-11-18",
            "name": "asdasdasdasd",
            "about": "asdasdasd"
        },
        {
            "_id": "636928fc2c47dce67a8c203d",
            "date": "2022-11-24",
            "name": "xczxc",
            "about": "czxczxc"
        },
        {
            "_id": "636929082c47dce67a8c203e",
            "date": "2022-12-06",
            "name": "frozen food",
            "about": "asdasdasd"
        }
    ];
    const load = () => {
        const url = 'http://localhost:5000/sale';
        fetch(url)
            .then(r => r.json())
            .then(data => setSales(data))
    }


    const hadelGetdata = e => {
        e.preventDefault();
        const sdate = e.target.sdate.value;
        const edate = e.target.edate.value;
        console.log(sdate, edate);
        const finddata = { sdate, edate };
        const url = `http://localhost:5000/datefilter?sdate=${sdate}&edate=${edate}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                if (!data.length) {
                    return toast.error('Data Load faild Please Try again !!!')
                }
                toast.success('Data Load Succesfully !!!')
                setSales(data);


            })

    }



    const handelAddSale = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const name = e.target.name.value;
        const about = e.target.about.value;
        const newSale = { date, name, about };
        console.log(newSale);
        if (newSale) {
            fetch('http://localhost:5000/sale', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newSale)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Sale added successfully!!!');
                    e.target.reset();
                    load()
                })

        }
    };


    return (
        <div className='p-2'>

            {/* <Slider></Slider> */}
            
           









            <div>

                {/* <a href="#my-modal-2" className="btn">open modal</a>
            <a href="#Supplier-modal" className="btn">open supp</a>
            <a href="#Group-modal" className="btn">Group supp</a>
            <a href="#Product-modal" className="btn">product supp</a>
            <a href="#Products-modal" className="btn">products supp</a>
            <a href="#Brand-modal" className="btn">Brand </a>
            <Link id='#my-modal-2' to={`/wpdate/${r._id}`} className="btn btn-sm">update</Link>
            <a href="#SaleModal" className="btn">sale  </a>  */}

            </div>
        </div>
    );
};

export default Home;


