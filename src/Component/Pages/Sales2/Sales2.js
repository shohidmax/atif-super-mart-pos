import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts/useProducts";
import Modal1 from "../../Element/Modal1";
import Recept from "../../Invoice/Recept/Recept";
import Print from "../../Print/Print";
import LoadVlogs from "../../Utilitis/LoadVlogs";
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';

const Sales2 = () => {
  //-------------------------------------------------------------------- Main State ----------------------------------------------------
  const [Sale, setSale] = useState([]);
  const [print, setPrint] = useState(false);
  // const [cart, setCart] = useStat8851607500026
  const [copy, setCopy] = useState('');
  const [Products] = useProducts();
  const [Cproduct, setCproduct] = useState({});

  // ------------------------------------------------------------ salese informatin for every invoice  ---------------------------------
  const [Qty, setQty] = useState('');
  const [Produc, setProduct] = useState('');
  const [CoustomerID, setCoustomerID] = useState('');
  const [Mobile, setMobile] = useState('');
  const [AttendentID, setAttendentID] = useState('');
  const [ShopName, setShopName] = useState('');
  const [Coustomer, setCoustomer] = useState('');
  const [Discount, setDiscount] = useState('');
  const [DiscountP, setDiscountP] = useState('');
  const [ExchangeA, setExchangeA] = useState('');
  const [PayType, setPayType] = useState('');
  const [PayAmound, setPayAmound] = useState(''); 
  const [payamount, setPayamount] = useState(''); 
  const [cardAmound, setcardAmound] = useState(''); 
  const [cashAmound, setCashAmound] = useState(''); 
  const [updateQTY, setupdateQTY] = useState(0); 
  const [Hold, setHold] = useState([]);

  //  Make A sale data and Prepair For An Object 
   // ----------------------------------------------------------------------- Current Date for Invoice ---------------------------------
  
// ------------------------------------------------------------------------- Coustomer Mobile Number -------------------------------
    const handleMobile = event => {
      setMobile(event.target.value);
    }
   // -----------------------------------------------------------------------  pay amound     ----------------------------------------
    const handlePA = event => {
      setPayamount(event.target.value);
    }
    //------------------------------------------------------------------------  discount parcentage  ------------------------------------
    const discountP = event => {
      setDiscountP(event.target.value);
    }
    // --------------------------------------------------------------------- discount amound  -------------------------------------------
    const discountA = event => {
      setDiscount(event.target.value);
    }
    // --------------------------------------------------------------------- payment  Type ---------------------------------------------
    const handleCashType = event => {
      setPayType(event.target.value);
    }
    
    //--------------------------------------------------------------------- card pay amound  ----------------------------------------------
    const hadleCardA = event => {
      setcardAmound(event.target.value);
    }
    //-------------------------------------------------------- handleCashA amound ------------------------------------------------------
    const handleCashA = event => {
      setCashAmound(event.target.value);
    }
    
  // --------------------------------------------------------------------- Detect key sortcut ----------------------------------------

    useEffect(() => {
      document.addEventListener('Keydown', DetectKey, true)
    }, []);

    const DetectKey =(e)=>{
      console.log(e.key, 'clicked E Text');
    }



  //------------------------------------------------------------------------- Price Calculation ------------------------------------
    let total = 0;
    let Product_quantity = 0;
    const totalPrice = 0;
  for(const product of Sale){
    total = total + product.RPU * product.orderq;
    Product_quantity = Product_quantity + product.orderq;
    //  totalPrice = total * Product_quantity;
  };
  let cnageamound = payamount - total;
    const handCopy = e => {
        const texts = e.target.copy.value;
    };
     //------------------------------------------------------------------------- Hold Current Data --------------------------------

    const handelHoldData = () =>{
      let currentsaledata = Sale;
      setHold(currentsaledata)
      setSale([])

    }
    //------------------------------------------------------------------------- save invoice data --------------------------------

    const saveInvoiceData =() =>{
      setPrint = [true];
    }
    if (print == true) {
      return <Recept></Recept>;
    }
    //------------------------------------------------------------------------- Update quantity --------------------------------

    const updateQuantity = async (e, q) =>{
      // const rw = await e.target.value 
      // e.preventDefault();
      // const rb = e.target.value;
      handelUpdateQuantity()
    }
    //-------------------------------------------------------------------------Update quantity--------------------------------
    const handelUpdateQuantity = (R) =>{ 
      R.preventDefault();
      const Replace = R.target.replace_order.value;
      setupdateQTY(Replace)
    
       return Replace;
       R.target.reset();
  }

//---------------------------------------------------------add to cart ----------------------------------------------------

   const addToCart = (barcode) => {
      // get barcode from search Input
      const getbarcode = barcode || barcode.target.loger.value; 
      // find product from store or database 
      const getSerarchProduct = Products.find((p) => p.BarCode == getbarcode);
      const existe = Sale.find((i) => i.BarCode == getSerarchProduct.BarCode);
      setCproduct(getSerarchProduct)
      // comparare local state and database
      let newMatch = getSerarchProduct == existe;
      // if data not store in object so get datat and set also aquantity
        if (newMatch == false) {
          if (!getSerarchProduct.StockQty == 0) {
            getSerarchProduct.orderq = 1;
            setSale([...Sale, getSerarchProduct]);
            
          } else {
            swal("Product Out of Stock!");
          }
        } else{
          const rolex = Sale.find((i) => i.BarCode == getbarcode);
          rolex.orderq = rolex.orderq + 1;
          const rolex2 = [{rolex}]
            const maps = [...Sale];
          const maps2 = maps.map(obj => rolex2.find(o => o.BarCode === obj.BarCode) || obj);
          setSale([...Sale])
        }
      
     }



     // ------------------------------------------------------------add To Cart 2 --------------------------------------------------
     const addToCart2 = ( barcode2) =>{
      addToCart(barcode2);
     }
     

     // ------------------------------------------------------------add To Cart 2--------------------------------------------------
     const addToCart3 = ( barcode3) =>{
      barcode3.preventDefault();
      const getbarcode = barcode3.target.loger.value; 
      addToCart(getbarcode);
      barcode3.target.reset();
     }


     //----------------------------------------------------------------------------------------------------------------------------
     const remoVeItem = (data) =>{
      // const removestate = Sale.remove(r) 
      const arr = Sale.filter(item => item !== data)

      setSale(arr)

     }




  // -----------------------------------------------------------------------reset sales datat------------------------------------- 
  const reset = () => {
    let a = [];
    setSale(a);
    toast.error(`Sales Data has been cleard`);
  }
 
  // Product loading
  if (Products <= 500) {
    return <LoadVlogs></LoadVlogs>;
  }
  const rrrr = {
    "_id": "633f4e807784639f332e3856",
    "Supplier_Name": "ACI LTD.",
    "BarCode": 8901314014528,
    "Group": "TOILETRIES",
    "Product": "TOOTHPASTE",
    "Brand": "COLGATE",
    "Style": "MAXFRESH BLUE 80G",
    "Stock_Qty": 0,
    "StockQty": 0,
    "CPU": 76,
    "CPU_Value": 0,
    "RPU": 85,
    "RPU_Value": 0,
    "Damage_Quntity": 0,
    "Comment": 0,
    "Status": "active"
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
              <form onSubmit={addToCart3}>
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
            <input name="loger"   style={{'width':'100px','height':'30px',}} className="text-end input border-2 bg-red-100 " type="text" placeholder={Cproduct.RPU} />
            </div>
        </div>
        <hr/>
        {/* secent line for input feature */}
        <div className="flex p-1 justify-between">
          
          <div>
            <label  className="p-2"> Product  </label> 
            <select   name="loger" onChange={e => addToCart2 (e.target.value)}  style={{'width':'550px','height':'30px','font-size':'12px'}} className="input border-2 p-1 m-1 bg-red-100 ">
                             <option style={{'font-size':'12px'}} disabled selected> select Your supplier  </option>
                             {
                                    Products.map((s, index) => <option style={{'font-size':'14px'}} className="mx-auto" key={index + 1} value={s.BarCode}>{s.Brand} - {s.Style} - {s.BarCode} - {s.RPU} TK - In Stock {s.StockQty}</option>)
                            }
                            </select>
            {/* <input name="loger"  style={{'width':'550px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder="Your Product Hear" /> */}
            </div>
          <div>
            <label className="p-2"> In Stock </label>
            <input name="loger"  style={{'width':'100px','height':'30px',}} className="input border-2 bg-red-100 " type="text" placeholder={Cproduct.StockQty} />
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
            <input name="loger" onChange={handleMobile}  style={{'width':'200px','height':'30px',}}  className="input border-2 bg-red-100 " type="text" placeholder="Coustomer Mobile" />
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
                  <th>Product Discription</th>
                  <th>Rate</th>
                  <th>Quntity</th>
                  <th>Discount</th>
                  <th>Sub Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Sale.map((r, index) => (
                  <tr key={index + 1}>
                    <th>{index + 1}</th>
                    <td><button onClick={handCopy} type="input" name="copy" value={r.BarCode}> {r.BarCode}</button></td>  
                    <td>{r.Brand} {" "}{r.Style} </td>
                    <td>{r.RPU}</td>  
                    <td> {r.orderq} </td>
                    <td> 00.00</td>
                    <td>
                   <Modal1 _id={r._id}  r={r} Sale={Sale} setSale={setSale} ></Modal1>

                   </td>
                   <td> 
                   <div class="dropdown ">
                         <label tabindex="0" class="btn btn-xs btn-primary">Update</label>
                         <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100   rounded-box ">
                           <li><button onClick={() => remoVeItem (r)} className="btn text-white p-1 m-1 btn-primary btn-xs">X</button>
                            </li>
                           <li><label  for={r._id} class="btn text-white p-1 m-1 btn-primary btn-xs">Update </label></li>
                         </ul>
                        </div>
                   </td>

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
            <button onClick={reset} style={{'width':'25%', 'height':'32px'}} className=" btn-primary m-1 ">Clear Sale</button>
            <button onClick={saveInvoiceData}  style={{'width':'70%', 'height':'32px'}} className=" btn-primary m-1 ">Print and submin</button>
            


            </div>

          </div>
          
        </div>
        </div>
        

        <div className="w-1/5 border text-left p-2 ">
          <div className="border-4 p-1">
          <p class="stat-value text-secondary text-2xl">Paid Amound: {payamount}</p>
          <p class="stat-value text-secondary text-red-500 text-2xl">Change Amound: {cnageamound}</p>
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
              <input type="text" onChange={discountP}  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Discount Amound </span>
              <input type="text" onChange={discountA} className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
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
                  <select onChange={handleCashType} style={{'width':'150px','height':'40px', 'border':'none', 'color':'red'}} id="cars">
                    <option style={{'font-size': '15px'}}  value="CASH">Cash</option>
                    <option style={{'font-size': '15px'}}  value="DUE">Due</option>
                    <option style={{'font-size': '15px'}}  value="DBBL"> DBBL </option>
                    <option style={{'font-size': '15px'}}  value="BKASH">BKash</option>
                    <option style={{'font-size': '15px'}}  value="ROCKET">Rocket</option>
                  </select>
                   </div>
            </div>
            <div> 
            <div className="flex justify-between">
              <span> Cash Amount </span>
              <input type="text" onChange={handleCashA} className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Card Amound </span>
              <input type="text" onChange={hadleCardA}  className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Pay Amound </span>
              <input type="text" onChange={handlePA} className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
            </div>
            <div className="flex justify-between">
              <span> Rtn Amound </span>
              <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" />
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


{/* <form onSubmit={handelUpdateQuantity}>
                      <input type="text" onBlur={() => updateQuantity(r)} placeholder={r.orderq } name='replace_order'/>
                      <input type="text" value={r.BArdode}  name='replace_order1'/>
                      </form> */}

//            <form onSubmit={addToCart}>
//                <label className="p-1">Barcode</label>
//                <input name="loger" style={{'width':'300px','height':'30px',}} className="input border-2 bg-red-100" type="text" placeholder="Barcode Hear" />
//             </form>