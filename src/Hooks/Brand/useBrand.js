import { useEffect, useState } from "react";

const useBrand = () =>{
    const [Brand, setBrand] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/brand')
        .then(res => res.json())
        .then(data => setBrand(data));
    }, [Brand]);
    return [Brand, setBrand]
}

export default useBrand; 