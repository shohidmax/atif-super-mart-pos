import { useEffect, useState } from "react";

const useBrand = () =>{
    const [Brand, setBrand] = useState([]);

    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/brand')
        .then(res => res.json())
        .then(data => setBrand(data));
    }, [Brand]);
    return [Brand, setBrand]
}

export default useBrand; 