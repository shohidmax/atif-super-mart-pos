import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts/useProducts";

const Sales2 = () => {
  const [Sale, setSale] = useState([]);
  // const [cart, setCart] = useStat8851607500026


  const [copy, setCopy] = useState('');
  const [Products] = useProducts();
    let total = 0;
    let Product_quantity = 0;
    const totalPrice = 0;
  for(const product of Sale){
    total = total + product.RPU * product.orderq;
    Product_quantity = Product_quantity + product.orderq;
    //  totalPrice = total * Product_quantity;
    
  };
const handCopy = e => {
    const texts = e.target.copy.value;
    console.log(texts);
};



const  playSound = ()=> {
  <audio id="play" src="http://www.soundjay.com/button/beep-07.wav"></audio>

}

const addToCart = (barcode) => {
  barcode.preventDefault();
  // get barcode from search menu
  const getbarcode = barcode.target.loger.value;
  // find product from store or database
  const getSerarchProduct = Products.find((p) => p.BarCode == getbarcode);
  const existe = Sale.find((i) => i.BarCode == getSerarchProduct.BarCode);
 // comparare local state and database
  let newMatch = getSerarchProduct == existe;
  // console.log(newMatch, 'newmatch datat ');
  // if data not store in object so get datat and set also aquantity
    if (newMatch == false) {
      getSerarchProduct.orderq = 1;
    setSale([...Sale, getSerarchProduct]);
    } else{
      const rolex = Sale.find((i) => i.BarCode == getbarcode);
      console.log(rolex.orderq[16]); 
      rolex.orderq = rolex.orderq + 1;
      const rolex2 = [{rolex}]
        const maps = [...Sale];
       const maps2 = maps.map(obj => rolex2.find(o => o.BarCode === obj.BarCode) || obj);
      setSale([...Sale])
    }
  barcode.target.reset();
}

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
          <form onSubmit={addToCart}>
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
                    <td><button onClick={handCopy} type="input" name="copy" value={r.BarCode}> {r.BarCode}</button></td>
                    <td>{r.RPU}</td>

                    <td>{r.Brand} {" "}{r.Style} </td>
                    <td>{r.Brand}</td>
                    <td>{r._id}</td>
                    <td>{r.orderq }</td>
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
          <p class="stat-value text-secondary">Total Item: {Sale.length}</p>
          <p class="stat-value text-secondary">Quantity: {Product_quantity}</p>
          <h4><div class="stat-value"> $ {total}</div></h4>
          <h4>vat:</h4>
          <h4>pay amound:{totalPrice}</h4>
          <h4>Change Amound:</h4>
          <h4>discount:</h4>
          <input
            type="Number"
            className="input border-red-500 "
            placeholder="amound"
          />
          <button onClick={playSound} className="btn btn-xs">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Sales2;
