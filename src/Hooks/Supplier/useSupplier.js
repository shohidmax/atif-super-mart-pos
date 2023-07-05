import { useEffect, useState } from "react";

const useSupplier = () =>{
    const [Supplier, setSupplier] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/supplier')
        .then(res => res.json())
        .then(data => setSupplier(data));
    }, [Supplier]);
    return [Supplier, setSupplier]
}

export default useSupplier; 


// ,{
//     headers:{
//         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }
// }
// https://atifsupermart.onrender.com/products
// https://atifsupermart.onrender.com/products/supp.json