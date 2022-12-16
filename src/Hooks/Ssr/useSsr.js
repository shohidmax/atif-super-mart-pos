import { useEffect, useState } from "react";

const useSsr = () =>{
    const [Ssr, setSsr] = useState([]);
    // https://atif-super-mart-pos-server.vercel.app//Ssrs
    useEffect( ()=>{
        fetch('https://atif-super-mart-pos-server.vercel.app//Ssr')
        .then(res => res.json())
        .then(data => setSsr(data));
    }, [Ssr]);
    return [Ssr, setSsr]
}

export default useSsr;  