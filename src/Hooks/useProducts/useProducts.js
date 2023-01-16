import { useEffect, useState } from "react";
const useProducts = () =>{
    const [Products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [Products]);
    return [Products, setProducts]
}

export default useProducts; 
