import React, { useEffect, useState } from 'react';

const useTodaySale = () => {
    const [Todaysale, setTodaysale] = useState([]);

    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/todaysale')
        .then(res => res.json())
        .then(data => setTodaysale(data));
    }, [Todaysale]);
    return [Todaysale, setTodaysale];
};

export default useTodaySale;