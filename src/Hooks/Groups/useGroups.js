import { useEffect, useState } from "react";

const useGroups = () =>{
    const [Groups, setGroups] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/group')
        .then(res => res.json())
        .then(data => setGroups(data));
    }, [Groups]);
    return [Groups, setGroups]
}

export default useGroups; 
