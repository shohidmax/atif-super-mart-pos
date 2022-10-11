import React from 'react';
import useBrand from '../../../Hooks/Brand/useBrand';

const Allmanage = () => {
    const [Brand, setBrand ] = useBrand();
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/brand/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = Brand.filter(data => data._id !== id);
                    setBrand(remaining);
                }
            })
        }
    }
    return (
        <div>
            <ul>
                
                {
                    Brand.map(res => 
                        <li>{res.Brand_Type_Name},,,, <button className="btn btn-danger" onClick={() => handleUserDelete(res._id)}>Delete</button></li>
                        
                        )
                }
                
            </ul>
            
        </div>
    );
};

export default Allmanage;