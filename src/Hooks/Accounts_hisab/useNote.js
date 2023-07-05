import { useEffect, useState } from "react";

const useNote = () =>{
    const [Cash, setCash] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/note')
        .then(res => res.json())
        .then(data => setCash(data));
    }, [Cash]);
    return [Cash, setCash];
}

export default useNote; 