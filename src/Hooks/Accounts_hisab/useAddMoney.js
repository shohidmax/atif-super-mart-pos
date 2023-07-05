import { useEffect, useState } from "react";

const useAddMoney = () =>{
    const [addMoney, setaddMoney] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/addmoney')
        .then(res => res.json())
        .then(data => setaddMoney(data));
    }, [addMoney]);
    return [addMoney, setaddMoney];
}

export default useAddMoney; 