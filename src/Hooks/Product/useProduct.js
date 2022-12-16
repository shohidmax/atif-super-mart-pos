import { useEffect, useState } from "react";

const useProduct = () =>{
    const [Product, setProduct] = useState([]);
    // https://atif-super-mart-pos-server.vercel.app//products
    useEffect( ()=>{
        fetch('https://atif-super-mart-pos-server.vercel.app//product')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [Product]);
    return [Product, setProduct]
}

export default useProduct; 