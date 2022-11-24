import { useEffect, useState } from "react";

const useSsr = () =>{
    const [Ssr, setSsr] = useState([]);
    // https://frozen-badlands-76581.herokuapp.com/Ssrs
    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/Ssr')
        .then(res => res.json())
        .then(data => setSsr(data));
    }, [Ssr]);
    return [Ssr, setSsr]
}

export default useSsr;  