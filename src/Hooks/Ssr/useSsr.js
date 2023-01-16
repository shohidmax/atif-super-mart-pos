import { useEffect, useState } from "react";

const useSsr = () =>{
    const [Ssr, setSsr] = useState([]);
    // http://localhost:5000/Ssrs
    useEffect( ()=>{
        fetch('http://localhost:5000/Ssr')
        .then(res => res.json())
        .then(data => setSsr(data));
    }, [Ssr]);
    return [Ssr, setSsr]
}

export default useSsr;  