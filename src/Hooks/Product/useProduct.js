import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    // http://localhost:5000/products
    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);
    return [Product, setProduct]
}

export default useProduct; 