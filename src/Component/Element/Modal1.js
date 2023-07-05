import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const Modal1 = ({_id, r, Sale, setSale}) => {
//  console.log(_id, r, Sale);
// console.log(r);
// ------------------------------------------------- Update Order Quntity ------------------------------
  const updateOrderq = (e) =>{
    e.preventDefault();
    const newq = Number(e.target.qty.value);
    
  // ---------------------------------------------------------------------------------------
  if (r.StockQty >= newq) {
    const getSerarchProduct = Sale.find((p) => p.BarCode == r.BarCode);
    const existe = Sale.find((i) => i.BarCode == getSerarchProduct.BarCode);
    // comparare local state and database
    let newMatch = getSerarchProduct == existe;
    // if data not store in object so get datat and set also aquantity
    if (newMatch == false) {
      getSerarchProduct.orderq = 1;
      setSale([...Sale, getSerarchProduct]);
    } else{
      const rolex = Sale.find((i) => i.BarCode == r.BarCode); 
      rolex.orderq =  newq;
      const rolex2 = [{rolex}]
      const maps = [...Sale];
      const maps2 = maps.map(obj => rolex2.find(o => o.BarCode === obj.BarCode) || obj);
      setSale([...Sale])
    }
    toast.success(`succesfully update quantity ${newq}`);
    e.target.reset();
    
  }
  else{ 
    return toast.error(`Please select less or quantity than ${r.StockQty}`);
  }
  
  }

  // ----------------------------------------------- Update Discount Amound -----------------------------
  const updateDiscount = (e) =>{
   console.log('clicked');
  }

  
  
  return (
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />

      <div className="modal " >
        <div style={{'width':'450px'}} className="modal-box mx-auto    max-w-5xl">
        <label for={_id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h1>{r.Brand} {r.Style} || {r.RPU} TK || {r.BarCode}</h1>
   
          <div className="flex">
            <h1 className="text-red-500 m-3">Order Quantity :  {r.orderq} </h1>
            <h1 className="text-red-500 m-3">Discount Amound :  {r.Discount || 0} </h1>
            <h1 className="text-red-500 m-3">In Stock :  <span className="text-xl">{r.StockQty}</span> </h1>
          </div>
          <div>
              <div className="mb-3"> 
                <form onSubmit={updateOrderq}>
                  <label className="m-2 p-2"> Update Sale quaantity</label><br/>
                  <input type="number" name="qty" style={{'width':'250px','height':'30px',}} placeholder='Update Sale Quantity' className="input  border-2 bg-red-100" required />
                  <input className="btn btn-xs m-4" type="submit" value='Upadate quantity' />
                </form>
              </div>
              <hr/>
              <div> 
                <form onSubmit={updateDiscount}>
                  <label className="m-2 p-2"> ADD discount </label><br/>
                  <input type="number" name="discount" style={{'width':'250px','height':'30px',}} placeholder='Discount Amound ' className="input border-2 bg-red-100"  />
                  <input className="btn btn-xs m-4" type="submit" value='add Discount' />
                </form>
              </div>
              <div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
