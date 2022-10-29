import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadTable from '../../Utilitis/LoadTable';



const Requireauth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <LoadTable></LoadTable>;
    }
    if(!user){
        return <Navigate to="/Login" state ={{from: location}} replace></Navigate>
    }
    
    return children;
}; 

export default Requireauth;
