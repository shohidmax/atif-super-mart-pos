import { useEffect, useState } from "react";

const useSupplier = () =>{
    const [Supplier, setSupplier] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/supplier')
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
// http://localhost:5000/products/supp.json