
import { useEffect, useState } from "react";

const useDue = () =>{
    const [Due, setDue] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/due')
        .then(res => res.json())
        .then(data => setDue(data));
    }, [Due]);
    return [Due, setDue];
}

export default useDue; 