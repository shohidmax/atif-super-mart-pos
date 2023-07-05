

import { useEffect, useState } from "react";

const useRest = () =>{
    const [Rest, setRest] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/todayrestamound')
        .then(res => res.json())
        .then(data => setRest(data));
    }, [Rest]);
    return [Rest, setRest];
}

export default useRest; 
