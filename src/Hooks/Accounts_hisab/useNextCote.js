

import { useEffect, useState } from "react";

const useNextCote = () =>{
    const [Cort, setCort] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/nextcort')
        .then(res => res.json())
        .then(data => setCort(data));
    }, [Cort]);
    return [Cort, setCort];
}

export default useNextCote; 
