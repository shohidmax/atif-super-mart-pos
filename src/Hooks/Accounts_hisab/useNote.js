import { useEffect, useState } from "react";

const useNote = () =>{
    const [Cash, setCash] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/note')
        .then(res => res.json())
        .then(data => setCash(data));
    }, [Cash]);
    return [Cash, setCash];
}

export default useNote; 