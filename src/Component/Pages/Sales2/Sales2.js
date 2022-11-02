import React, { useState } from "react";
import useProducts from "../../../Hooks/useProducts/useProducts";
import Recept from "../../Invoice/Recept/Recept";
import Print from "../../Print/Print";
import LoadVlogs from "../../Utilitis/LoadVlogs";

const Sales2 = () => {
  const [Sale, setSale] = useState([]);
  const [print, setPrint] = useState(false);
  // const [cart, setCart] = useStat8851607500026
  const [copy, setCopy] = useState('');
  const [Products] = useProducts();
  let Hold = [];

  // Price Calculation 
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
  // manage hold data
  const handelHoldData = () =>{
    let currentsaledata = {...Sale};
    Hold.Push(currentsaledata)
    Sale = [];
    console.log(Hold);

  }
    const saveInvoiceData =() =>{
      console.log('clicked');
      setPrint = true;
      
      


    }
    console.log(print, '------------------------------------------------------------------------------------------');
    if (print == true) {
      return <Recept></Recept>;
    }

// console.log(...Sale, Hold);


  const addToCart = (barcode) => {
      barcode.preventDefault();
      // get barcode from search Input
      const getbarcode = barcode.target.loger.value;
      // find product from store or database
      const getSerarchProduct = Products.find((p) => p.BarCode == getbarcode);
      const existe = Sale.find((i) => i.BarCode == getSerarchProduct.BarCode);
    // comparare local state and database
      let newMatch = getSerarchProduct == existe;
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
  const handelUpdateQuantity = (R) =>{
    R.preventDefault();
    const Replace = R.target.replace_order.value;
    const Replace1 = R.target.replace_order1.value;
    // const Replace2 = R.target.for.value;
    console.log(Replace, 'clicked', Replace1);
    R.target.reset();
  }


  const reset = () => {
    setSale = [];
  }
  console.log(Sale);

  if (Products <= 500) {
    return <LoadVlogs></LoadVlogs>;
  }

  return (
    <div>
      <div className="flex p-6 m-6 w-5/5 border">
        {/* border top  */}
        <div className="w-4/5 border">
          {/* first line border  */}
        <div className="flex p-1 justify-between">
          <div  className="flex">
          <div>
            <form onSubmit={addToCart}>
            <label className="p-1">Barcode</label>
              <input name="loger" style={{'width':'300px','height':'30px',}} className="input border-2 bg-red-100" type="text" placeholder="Barcode Hear" />
            </form>
          </div>
          <div>
            <label className="p-2"> Qty </label>
            <input name="loger"  style={{'width':'55px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder=" 1" />
            </div>
          <div>
            <label className="p-2"> Auto Scan </label>
            <input type="checkbox" class="toggle toggle-secondary"  />
            </div>
          </div>
            <div>
            <label className="p-2"> Rate </label>
            <input name="loger"   style={{'width':'100px','height':'30px',}} className="text-end input border-2 bg-red-100 " type="text" placeholder="0.00" />
            </div>
        </div>
        <hr/>
        {/* secent line for input feature */}
        <div className="flex p-1 justify-between">
          
          <div>
            <label className="p-2"> Product  </label>
            <input name="loger"  style={{'width':'550px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="Your Product Hear" />
            </div>
          <div>
            <label className="p-2"> In Stock </label>
            <input name="loger"  style={{'width':'100px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="0.00" />
          </div>
           
        </div>
        <hr/>
        {/* 34d line input  */}
        <div className="flex p-1 justify-between">
          <div className="flex">
          <div>
            <form onSubmit={addToCart}>
            <label className="p-1">Coustomer id </label>
              <input name="loger" style={{'width':'200px','height':'30px',}} className="input border-2 bg-red-100" type="text" placeholder="Your Coustomer ID" />
            </form>
          </div>
          <div>
            <label className="p-2"> Mobile </label>
            <input name="loger"  style={{'width':'200px','height':'30px',}}  className="input border-2 bg-red-100 " type="text" placeholder="Coustomer Mobile" />
            </div>
          </div>
          
            <div>
            <label className="p-2"> Name </label>
            <input name="loger" style={{'width':'350px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="Coustomer Name Here" />
            </div>
        </div>
        <hr/>
         {/* 4th line for  */}
        <div className="flex p-1">
          <div>
            <form onSubmit={addToCart}>
            <label className="p-1">Attendent ID</label>
              <input name="loger"  style={{'width':'200px','height':'30px',}} className="input border-2 bg-red-100" type="text" placeholder="Attendent ID" />
            </form>
          </div>
          <div>
            <label className="p-2"> Name </label>
            <input name="loger"  style={{'width':'200px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="Shop name" />
          </div>
        </div>
          <hr className="m-2 color-balck-800" />
        {/* table data  */}
          <div class="overflow-x-auto " style={{'height':'350px'}}>
            <table class="table table-compact w-full" >
              <thead className="bg-primary">
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
                  <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <td><button onClick={handCopy} type="input" name="copy" value={r.BarCode}> {r.BarCode}</button></td>
                    <td>{r.RPU}</td>

                    <td>{r.Brand} {" "}{r.Style} </td>
                    <td>{r.Brand}</td>
                    <td>{r._id}</td>
                    <td><form onSubmit={handelUpdateQuantity}>
                      <input type="text" placeholder={r.orderq } name='replace_order'/>
                      <input type="text" value={r.BArdode}  name='replace_order1'/>
                      </form></td>
                    <td><button className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                   </button></td>
                  </tr> 
                ))}
              </tbody>
            </table> 
          </div>
          <hr/>
                  {/* external option  */}
        <div className="border-4 m-2 w-100 flex">
          {/* first section  */}
          <div className="border-2 overflow-x-auto" style={{'height':'100px'}}>
          <table class="">
              <thead>
                <tr className="bg-red-500">
                  <th>Hold ID</th>
                  <th>Attendent</th>
                  <th>Total Qty</th>
                  <th>Total Items</th>
                  <th>Total Amound</th>
                  <th> recall</th>
                </tr>
              </thead>
              <tbody>
                {
                  Hold?.map((r,q) => 
                  <tr className="border-1">
                  <td>shohid0101</td>
                  <td>  </td>
                  <td>2.000</td>
                  <td>2.000</td>
                  <td>2.000</td>
                  <td><button>...</button></td>
                </tr>
                  )
                }
                
                <tr className="border-1">
                  <td>shohid0101</td>
                  <td>  </td>
                  <td>2.000</td>
                  <td>2.000</td>
                  <td>2.000</td>
                  <td><button>...</button></td>
                </tr>
                
              </tbody>
            </table>

          </div>
          {/* secend section  */}
          <div className="">
                <div className="border-2 p-1 m-1">
                  <button style={{'width':'100px', 'height':'32px'}} onClick={handelHoldData}  className=" btn-primary m-2">Hold</button><br/>
                  <button style={{'width':'100px', 'height':'32px'}}  className=" btn-primary m-2">Exchange</button>
                </div>
          </div>
          {/* drd sectuin */}

          <div className="border-2 mx-auto" style={{'width':'55%'}}>
            {/* 1st div  */}
            <div className="flex">
            <button  style={{'width':'25%', 'height':'32px'}} className=" btn-primary m-1 w-1/4">Applay Promotion</button>
            <button  style={{'width':'70%', 'height':'32px'}} className=" btn-primary m-1 ">Print Last invoice</button>
            

            </div>
            {/* 2nd div  */}
            <div className="flex justify-between p-2">
              <label>#No of Copies</label>
              <input name="loger" style={{'width':'75%','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="1" />
            </div>
            {/* 3rd div  */}
            <div>
            <button  style={{'width':'25%', 'height':'32px'}} className=" btn-primary m-1 ">Clear Sale</button>
            <button onClick={saveInvoiceData}  style={{'width':'70%', 'height':'32px'}} className=" btn-primary m-1 ">Print and submin</button>
            


            </div>

          </div>
          
        </div>
        </div>
        

        <div className="w-1/5 border text-left p-2 ">
          <div className="border-4 p-1">
          <p class="stat-value text-secondary text-3xl">Paid Amound: {Sale.length}</p>
          <p class="stat-value text-secondary text-2xl">Change Amound: {Product_quantity}</p>
            <div>
              <div className="flex justify-between">
                <label>Total Quantity : </label>
                <input type="text"  className="text-end"  style={{'width':'100px','height':'20px',}}   placeholder={Sale.length}/>
              </div>
              <div className="flex  justify-between">
                <label>Total Quantity  </label>
              	 <input type="text"  className="text-end"  style={{'width':'100px','height':'20px',}}  placeholder={Product_quantity}/>
              </div>
            </div>
          </div>
          {/* secend section  */}
          <div className="border-4 p-1">
            <div> 
                  <div className="flex justify-between">
                    <span> Point Balance </span>
                    <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                  </div>
                  <div className="flex justify-between">
                    <span> Point THis Inv.</span>
                    <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                  </div>
                  <div className="flex justify-between">
                    <span> Point Redeem </span>
                    <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                  </div>
              </div>            
          </div>
           {/* thard section  */}
           <div className="border-4 p-1">
            <div className=" "> 
            <div className="flex justify-start">
              <h1> Net Payable</h1>
              
            </div>
            <div className="flex justify-between">
              <span> Total Price {totalPrice}</span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder={totalPrice} value={total} />
            </div>
            <div className="flex justify-between">
              <span> Discount  %  </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Discount Amound </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Vat Amound </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Exchange Amound </span>
              <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Rounding </span>
              <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Net Amount </span>
              <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            
            </div>            
          </div>
          {/* 4th section  */}

          <div className="border-4 p-1">
            <h1 className="text-xl text-italic">Made of Payment</h1>
            <div className="flex justify-between">
             
                   <div>
                       <label className="p-2"> C&C </label>
                      <input type="checkbox" class="toggle toggle-secondary"  />
                   </div>
                   <div>
                  <select style={{'width':'150px','height':'40px', 'border':'none', 'color':'red'}} id="cars">
                    <option style={{'font-size': '15px'}}  value="volvo">Cash</option>
                    <option style={{'font-size': '15px'}}  value="volvo">Due</option>
                    <option style={{'font-size': '15px'}}  value="volvo">DBBL </option>
                    <option style={{'font-size': '15px'}}  value="volvo">BKash</option>
                    <option style={{'font-size': '15px'}}  value="volvo">Rocket</option>
                  </select>
                   </div>
            </div>
            <div> 
            <div className="flex justify-between">
              <span> Cash Amount </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Card Amound </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Pay Amound </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Rtn Amound </span>
              <input type="text"  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales2;




// // 

// <h1 className="broder-b-4">Total Price</h1>
//           <br />
//           <p class="stat-value text-secondary">Total Item: {Sale.length}</p>
//           <p class="stat-value text-secondary">Quantity: {Product_quantity}</p>
//           <h4><div class="stat-value"> $ {total}</div></h4>
//           <h4>vat:</h4>
//           <h4>pay amound:{totalPrice}</h4>
//           <h4>Change Amound:</h4>
//           <h4>discount:</h4>
//           <input
//             type="Number"
//             className="input border-red-500 "
//             placeholder="amound"
//           />
//           <button onClick={playSound} className="btn btn-xs">Submit</button>
