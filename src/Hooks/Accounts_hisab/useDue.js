
import { useEffect, useState } from "react";

const useDue = () =>{
    const [Due, setDue] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/due')
        .then(res => res.json())
        .then(data => setDue(data));
    }, [Due]);
    return [Due, setDue];
}

export default useDue; 