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
        <div>
            <h3 className='text-3xl'> Input Password</h3>
            <form onSubmit={approve}>
                <input type="text" className='input' name='pass1' placeholder='password please'  required/> <br/>
                <input className='btn' type="submit" value='submit' />
            </form>
            
        </div>
    );
    
   }
};

export default RequireManager;