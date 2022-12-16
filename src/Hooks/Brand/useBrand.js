import { useEffect, useState } from "react";

const useBrand = () =>{
    const [Brand, setBrand] = useState([]);

    useEffect( ()=>{
        fetch('https://atif-super-mart-pos-server.vercel.app//brand')
        .then(res => res.json())
        .then(data => setBrand(data));
    }, [Brand]);
    return [Brand, setBrand]
}

export default useBrand; 