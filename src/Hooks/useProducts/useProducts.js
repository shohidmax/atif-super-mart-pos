import { useEffect, useState } from "react";
const useProducts = () =>{
    const [Products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://atif-super-mart-pos-server.vercel.app//products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [Products]);
    return [Products, setProducts]
}

export default useProducts; 
