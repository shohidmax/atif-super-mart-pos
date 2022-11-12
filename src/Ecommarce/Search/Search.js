import React, { useEffect, useState } from 'react';
// import useProduct from '../../../Hooks/useProducts';

const Search = () => {
    // const [Product, setProduct] = useProduct();
    const [re, setR] = useState();
    // useEffect( () =>{
    //     const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
    //     fetch(url)
    //     .then(r => r.json())
    //     .then(data => setPdata(data));
    // }, []); 
    const searchBar = async (e) =>{
        const searchbar2 =  e.target.value.toUpperCase();
        if (searchbar2){
            let result =  await fetch(`http://localhost:5000/search/${searchbar2}`);
            result = await result.json()
          console.log(result);
            if(result)(
                
                setR(result)
                // console.log();
            )
        }
        else{
            
        }
        console.log(searchbar2.toUpperCase());
        
    }
    console.log(re);
    return (
        <div className='border-black mb-6 mx-auto grid grid-cols-2/4 gap-4 content-center place-items-center'>
            <h5>{re?.length}</h5>
             
            <input onChange={searchBar} type="text"  placeholder="Type here" class="input   input-bordered w-full max-w-xs" /><br/>
            <div>
            <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th>Barcode</th> 
        <th>Group Name</th> 
        <th>Product Name</th> 
        <th>Brand Name</th> 
        <th>style Size</th> 
        <th>CPU</th> 
        <th>RPU</th>
        <th>Supplier</th>
      </tr>
    </thead> 
    <tbody>
      {
        re?.map((i) => <tr key={i._id}>
        <th>{i.BarCode}</th> 
        <th>{i.Group}</th> 
        <th>{i.Product}</th> 
        <th>{i.Brand}</th> 
        <th>{i.Style}</th> 
        <th>{i.CPU} $</th> 
        <th>{i.RPU} $</th> 
        <th>supplayer</th> 
        
      </tr>)
      }
      {
        // BarCode: "8941159000300"
        // Brand: "ARONG"
        // CPU: 13.25
        // CPU_Value: 26.5
        // Group: "DRINKS & BEVERAGES"
        // Product: "JUICE"
        // RPU: 15
        // RPU_Value: 30
        // Stock_Qty: 2
        // Style: "MANGO MILK DRINK UHT 125ML"
        // _id: "62d02e1767f916ab741cea1f"
      }
      
    </tbody> 

    
  </table>
</div>
            </div>



        </div>
    );
};



export default Search;