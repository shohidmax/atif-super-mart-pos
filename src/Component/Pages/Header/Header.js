import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const LogOut = () => {
    signOut(auth);
  };

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li tabindex="0">
          <Link to="/home" className="justify-between">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          
          </li>   
          <li className='btn btn-primary p-2 m-2 '> <Link to="/Order">Damage List</Link></li>
      <li className='btn btn-primary p-2 m-2 '><Link to="/sales">Sales</Link></li>
      <li className='btn btn-primary p-2 m-2 '><Link to="/damageq">Damage</Link></li>
      <li className='btn btn-primary p-2 m-2 ' > <Link  to="/addproduct">add Product</Link></li>
      <li className='btn btn-primary p-2 m-2 '> {user ?<button onClick={LogOut} >LogOut</button> : <Link to="login" >Login</Link>}</li>
      </ul>
    </div>
    <Link to="/home" className="btn btn-ghost normal-case text-xl">ATIF SUPER MART</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal ml-3">
     
      
      <li tabindex="0">
        {/* <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a> */}
        
      </li>
      <li className='btn btn-primary p-2 m-2 '><Link to="/sales">Sales</Link></li>
      <li className='btn btn-primary p-2 m-2 '><Link to="/dashboard">Dashboard</Link></li>
      <li className='btn btn-primary p-2 m-2 ' tabindex="0">
        <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
            <ul class="p-2 bg-base-100">
            <li className='btn btn-primary p-1 m-1 '> <Link to="/Order">Damage List</Link></li>
            <li className='btn btn-primary p-1 m-1 '><Link to="/damageq">Damage</Link></li> <li className='btn btn-primary p-2 m-2 ' > <Link  to="/srlist">SR List</Link></li>
            <li className='btn btn-primary p-1 m-1' > <Link  to="/Allmanage">Allmanage</Link></li>
            <li className='btn btn-primary p-1 m-1 ' > <Link  to="/addproduct">add Product</Link></li>
            <li className='btn btn-primary p-1 m-1'> {user ?<button onClick={LogOut} >LogOut</button> : <Link to="login" >Login</Link>}</li>
        </ul>
      </li>
      

    </ul>
    
  </div>
  
</div>
        </div>
    );
};

export default Header;