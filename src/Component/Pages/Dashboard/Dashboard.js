import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            
            <div style={{'height':'100vh'}} className='bg-green-400  border-2 w-2/12'>
                <ul>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard' >Dashnoard </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/rpt' >rpt </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/barcode' >barcode </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/addsr' >addsr </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/qr' >qr </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard' >Dashnoard </Link> </li> 
                </ul>

            </div>
            <div  className='bg-gray-400 border-2 w-10/12'>
            <h1>this is dashboard</h1>

                <Outlet></Outlet> 
            </div>
             
        </div>
    );
};

export default Dashboard; 