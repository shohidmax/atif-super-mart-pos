import React, { useEffect, useState } from 'react';

const useTodaySale = () => {
    const [Todaysale, setTodaysale] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:3002/todaysale')
        .then(res => res.json())
        .then(data => setTodaysale(data));
    }, [Todaysale]);
    return [Todaysale, setTodaysale];
};

export default useTodaySale;