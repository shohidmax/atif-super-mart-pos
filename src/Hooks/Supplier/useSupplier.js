import { useEffect, useState } from "react";

const useSupplier = () =>{
    const [Supplier, setSupplier] = useState([]);

    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/supplier')
        .then(res => res.json())
        .then(data => setSupplier(data));
    }, []);
    return [Supplier, setSupplier]
}

export default useSupplier; 


// ,{
//     headers:{
//         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }
// }
// https://shielded-beyond-98967.herokuapp.com/products
// https://frozen-badlands-76581.herokuapp.com/products/supp.json