import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    // https://frozen-badlands-76581.herokuapp.com/products
    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [Product]);
    return [Product, setProduct]
}

export default useProduct; 