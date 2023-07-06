import React, { useEffect, useState } from 'react';
const api = 'api/v3/finalsubmit';
const Hisab_khata = () => {
    const [hisab_summ, setHisab] = useState([]);
    useEffect( ()=>{
        fetch(`https://atifsupermart.onrender.com/${api}`)
        .then(res => res.json())
        .then(data => {
            setaddMoney(data);
            console.log(data); 
        });
    }, [hisab_summ]);
    return ([hisab_summ, setHisab]);
};

export default Hisab_khata;