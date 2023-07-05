
import { useEffect, useState } from "react";

const useCost = () =>{
    const [Cost, setCost] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/cost')
        .then(res => res.json())
        .then(data => setCost(data));
    }, [Cost]);
    return [Cost, setCost];
}

export default useCost; 