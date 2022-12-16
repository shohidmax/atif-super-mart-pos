import { useEffect, useState } from "react";

const useGroups = () =>{
    const [Groups, setGroups] = useState([]);

    useEffect( ()=>{
        fetch('https://atif-super-mart-pos-server.vercel.app//group')
        .then(res => res.json())
        .then(data => setGroups(data));
    }, [Groups]);
    return [Groups, setGroups]
}

export default useGroups; 
