import React, { useState } from 'react';
import useScanDetection from 'use-scan-detection';

const Input = () => {
    const [value, setValue] = useState("");

    useScanDetection({
        onComplete: setValue,
        minLength: 13 // EAN13
    });

    return (
        <input 
            value={value} 
            type="text"
        />
    );
};

export default Input