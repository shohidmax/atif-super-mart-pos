import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            
            <div style={{'height':'100vh'}} className='bg-green-400  border-2 w-1/12'>
                <ul>
                    <li> <Link className='btn btn-primary btn-sm m-2  w-8/12' to='/dashboard' >Dashnoard </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/rpt' >recept </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/barcode' >Barcode </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/addsr' >Saleseman ADD </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/srlist' >Saleseman list </Link> </li>
                    <li> <Link className='btn btn-primary btn-sm m-2   w-8/12' to='/dashboard/qr' >Qr Code Generatoe </Link> </li>
                </ul>

            </div>
            <div  className='bg-gray-400 border-2 w-10/12'>
            <h1>Dashboard</h1>

                <Outlet></Outlet> 
            </div>
             
        </div>
    );
};

export default Dashboard; 