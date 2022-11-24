import { useEffect, useState } from "react";

const useGroups = () =>{
    const [Groups, setGroups] = useState([]);

    useEffect( ()=>{
        fetch('https://frozen-badlands-76581.herokuapp.com/group')
        .then(res => res.json())
        .then(data => setGroups(data));
    }, [Groups]);
    return [Groups, setGroups]
}

export default useGroups; 
