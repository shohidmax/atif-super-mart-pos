
import { useEffect, useState } from "react";

const useAccounts = () =>{
    const [Accounts, setAccounts] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/accounts')
        .then(res => res.json())
        .then(data => setAccounts(data));
    }, [Accounts]);
    return [Accounts, setAccounts];
}

export default useAccounts; 