import { useEffect, useState } from "react";

const useBrand = () =>{
    const [Brand, setBrand] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/brand')
        .then(res => res.json())
        .then(data => setBrand(data));
    }, []);
    return [Brand, setBrand]
}

export default useBrand; 