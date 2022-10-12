import { useEffect, useState } from "react";

const useProducts = () =>{
    const [Products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [Products, setProducts]
}

export default useProducts; 
