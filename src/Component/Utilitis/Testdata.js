import React, { useState,useEffect, useRef  } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import { ComponentToPrint } from './ComponentToPrint';
 

const Testdata = () => {
  const [Sale, setSale] = useState([]);
  const [Products, setProducts] = useProducts();
  
  return (
      <div>
          <ComponentToPrint></ComponentToPrint>

       
      </div>
  );
};

export default Testdata;