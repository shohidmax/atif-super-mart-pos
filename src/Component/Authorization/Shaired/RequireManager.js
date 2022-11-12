import React, { useState } from 'react';
import Sales2 from '../../Pages/Sales2/Sales2';

const RequireManager = ({children}) => {
    const pass = 440044;
    const [use, Setuse] = useState(false);
   

     const approve = (e) =>{
        
        e.preventDefault();
        const inpass = e.target.pass1.value;
        console.log(pass == inpass);
        if (pass == inpass) {
            Setuse(true);
        }else{
            alert('please try agaihn')
        }
        e.target.reset();
     }
     
   if (use == true) {
    return children;
   } else {
    return (
        <div className='grid mx-auto my-auto bg-red-600 place-content-center ' style={{'height':'100vh'}}>
            <h3 className='text-3xl m-3'>ATIF SUPER MART </h3>
            <form onSubmit={approve}>
                <input type="text" className='input m-2' name='pass1' placeholder='Login Password' autoComplete='off'  required/> <br/>
                <input className='btn m-2' type="submit" value='Login' />
                <input className='btn' type="submit" value='Home' />
            </form>
            
        </div>
    );
    
   }
};

export default RequireManager;