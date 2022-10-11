import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts/useProducts";

const sales3 = () => {
  const [Sale, setSale] = useState([]);
  // const [cart, setCart] = useState([]);
  const [copy, setCopy] = useState('');
  const [Products] = useProducts();
    let total = 0;

  for(const product of Sale){
    total = total + product.data.RPU;
    
}
const handCopy = e => {
    const texts = e.target.copy.value;
    console.log(texts);
}



  const soSearch = (Barcode) => {
    Barcode.preventDefault();
    // get data id from Input
    const searchValue = Barcode.target.loger.value;
    console.log( searchValue);
    // Match data form state and assign selected Product
    const data = Products.find((i) => i.BarCode == searchValue);
    // // console.log(data);
    //     const exists = Sale.find(product => product.data.BarCode === searchValue);
    // if(!exists){
    //   console.log(data);
    //   const quantity1 = 1;
    //   const role = { data, quantity1 };
    //   console.log(role);
    //   setSale([...Sale, role]);
    //   Barcode.target.reset();
    // }
    // else{
    //     const rest = Sale.filter(product => product.data.BarCode !== searchValue ;
    //     exists.quantity1 = exists.quantity1 + 1;
    //     setSale = [...Sale, exists];
    // }
    if (data) {

      
      const data2 = Sale.find((i) => i.data.BarCode == data.BarCode);
      console.log(data2);
      if (!data2.quantity1 && data2 == undefined) {
        console.log(data);
        let quantity1 = 1;
        const role = { data, quantity1 };
        console.log(role);
        setSale([...Sale, role]);
  console.log(" not existed");

        Barcode.target.reset();
      } else{
        // quantity1 = quantity1 + 1;
        const newuantity = data2.data.quantity1 + 1;
        const role = { data, newuantity};
        console.log('existed');
        setSale([...Sale, role]);
  console.log(Sale);

        Barcode.target.reset();
      }
       
    } else{
        alert("Product not found");
    }
  };
  const reset = () => {
    setSale = [];
  }
  console.log(Sale);

  if (Products <= 500) {
    return <button class="btn loading">loading</button>;
  }

  return (
    <div>
      <div className="flex p-6 m-6 w-5/5 border">
        <div className="w-4/5 border">
          <form onSubmit={soSearch}>
            <input
              name="loger"
              className="input border-2 bg-red-100"
              type="text"
              placeholder="Barcode Hear"
            />
          </form>
          <hr className="m-2 color-balck-800" />

          <div class="overflow-x-auto">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th> SN</th>
                  <th>Barcode</th>
                  <th>Price</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>ID</th>
                  <th>quantity</th>
                  <th>update</th>
                </tr>
              </thead>
              <tbody>
                {Sale.map((r, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td><button onClick={handCopy} type="input" name="copy" value={r.data.Product_barcode}> {r.data.BarCode}</button></td>
                    <td>{r.data.RPU}</td>

                    <td>{r.data.Brand} {" "}{r.data.Style} </td>
                    <td>{r.data.product_brand}</td>
                    <td>{r.data._id}</td>
                    <td>{r.quantity1}</td>
                    <td><button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
                  </tr> 
                ))}
              </tbody>
            </table> 
          </div>
        </div>

        <div className="w-1/5 border text-left p-2 ">
          <h1 className="broder-b-4">Total Price</h1>
          <br />
          <p class="stat-value text-secondary">Quantity: {Sale.length}</p>
          <h4><div class="stat-value"> $ {total}</div></h4>
          <h4>vat:</h4>
          <h4>pay amound:</h4>
          <h4>Change Amound:</h4>
          <h4>discount:</h4>
          <input
            type="Number"
            className="input border-red-500 "
            placeholder="amound"
          />
          <button onClick={() => reset()} className="btn btn-xs">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default sales3;
