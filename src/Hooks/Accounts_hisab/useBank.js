import { useEffect, useState } from "react";

const useBank = () =>{
    const [bank, setbank] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/bank')
        .then(res => res.json())
        .then(data => setbank(data));
    }, [bank]);
    return [bank, setbank];
}

export default useBank; 