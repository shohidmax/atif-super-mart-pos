import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    // https://atifsupermart.onrender.com/products
    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [Product]);
    return [Product, setProduct]
}

export default useProduct; 