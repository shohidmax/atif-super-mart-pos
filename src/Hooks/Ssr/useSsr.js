import { useEffect, useState } from "react";

const useSsr = () =>{
    const [Ssr, setSsr] = useState([]);
    // https://atifsupermart.onrender.com/Ssrs
    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/Ssr')
        .then(res => res.json())
        .then(data => setSsr(data));
    }, [Ssr]);
    return [Ssr, setSsr]
}

export default useSsr;  