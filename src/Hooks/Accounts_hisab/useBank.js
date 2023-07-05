import { useEffect, useState } from "react";

const useBank = () =>{
    const [bank, setbank] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/bank')
        .then(res => res.json())
        .then(data => setbank(data));
    }, [bank]);
    return [bank, setbank];
}

export default useBank; 