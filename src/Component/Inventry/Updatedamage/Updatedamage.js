import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import LoadTable from '../../Utilitis/LoadTable';

const Updatedamage = () => {
    const [Pdata, setPdata] = useState([]);

    
    const findproduct = (B) =>{
        B.preventDefault();
        const Find = B.target.bangla.value;
        const url = `https://atifsupermart.onrender.com/damage-stock-update/${Find}`;
        console.log(url);
        fetch(url)
        .then(r => r.json())
        .then(data => {
            if (!data) {
                return <LoadTable></LoadTable>;
            }else{
                setPdata(data);
            }
        });
        B.target.reset(); 
    };
    // https://atifsupermart.onrender.com
    const handleAddToDamage = event =>{
        event.preventDefault();
        const ids = Pdata._id; 
        console.log('remover id ', ids);
        const Damage_Quntity = event.target.Stock_Qty.value;
        const reStock = parseFloat(Damage_Quntity) + Pdata.Damage_Quntity;
        const updatedStock = {reStock};
 
        const url = `https://atifsupermart.onrender.com/handleAddToDamage/${ids}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            setPdata(data);
            toast.success('Product Quntity added successfully!!!')

            setPdata = [];
            
        })
        event.target.reset();
    };
    const handleRemoveDamage = event =>{
        event.preventDefault();
        const ids = Pdata._id; 
        console.log('remover id ', ids);
        const Damage_Quntity = event.target.Stock_Qty.value;
        const reStock = parseFloat(Damage_Quntity) - Pdata.Damage_Quntity;
        const updatedStock = {reStock};
 
        const url = `https://atifsupermart.onrender.com/handleAddToDamage/${ids}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            setPdata(data);
            toast.success('Product Quntity Decrise successfully!!!')
            setPdata = [];
           
        })
        event.target.reset();
    };





    // {
    //     "_id": "633f4e807784639f332e3b62",
    //     "Supplier_Name": "EGG",
    //     "BarCode": 111111,
    //     "Group": "MILK & DAIRY PRODUCTS",
    //     "Product": "EGG",
    //     "Brand": "EGG",
    //     "Style": "BROWN EGG 1PCS",
    //     "Stock_Qty": 0,
    //     "StockQty": 124,
    //     "CPU": 11.19,
    //     "CPU_Value": 0,
    //     "RPU": 12,
    //     "RPU_Value": 0,
    //     "Damage_Quntity": 0,
    //     "Comment": 0,
    //     "Status": "active"
    // }
    if (Pdata.length == 0) {
    
        
    }




 
    return (
        <div className='container'>
            
            <div className=" w-10/12 border border-primary rounded m-2 mx-auto p-1" >
            <div >
                <div className='p-1'>
                    <h2 className='online'>Find Product {Pdata.length}</h2>
                    <form onSubmit={findproduct}> 
                        <input name="bangla"   className="input overflow-hidden input-bordered input-secondary w-full max-w-xs p-2 m-auto"   type="text" placeholder='Enter Your BarCode Hare' required />
                        
                    </form>
 
                </div>
                {
                    Pdata.length == 0 ? <div>
                        <div className="border border-blue-300 shadow rounded-md    w-full max-w-xs m-2 p-2 mx-auto">
                            <div className="animate-pulse flex space-x-4">
                              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                              <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                  <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                  </div>
                                  <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                            </div>


                    </div> : <div className=' Flex sm:flex   p-3 m-2 text-left mx-auto'>
                    <div className='mx-auto'>
                    <h2 className=''>Product : {Pdata.Brand}{" "}{Pdata.Product}{" "} {Pdata.Style}</h2>
                    <hr/>
                    <h2 className=''>Stock : {Pdata.StockQty}</h2>
                    <hr/>
                    <h2 className='text-1xl'>Suppler : {Pdata.Supplier_Name} </h2>
                    <hr/>
                    <h2 className='text-red-500 text-2xl'>Damage : {Pdata.Damage_Quntity} Pcs</h2>
                    <hr className='order'/>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div className='  mx-auto'>
                    <h2 className=''>CPU Value ৳ : {Pdata.CPU}</h2>
                    <hr/>
                    <h2 className=''>RPU Value : {Pdata.RPU}</h2>
                    <hr/>
                    <h2>Status : {Pdata.Status} </h2>
                    <hr/>
                    <h1>Product _id: {Pdata._id}</h1>
                    <hr/>
                     
                    <h1>Product Barcode : {Pdata.BarCode}</h1>
                    <hr/>
                    </div>
                </div>
                }
            

            {/* <button onClick={handleDelever}  className='btn btn-danger w-25 mt-2'> Delevery</button> */}
            </div>
            {
                Pdata.length == 0 ? <div><progress className="progress progress-info bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-full max-w-xs  mx-auto"></progress>  


                </div>:
            
                <div className='Flex sm:flex '>
                    <div className='border border-primary rounded m-3 sm:w-2/4'>
                        <form className='m-2' onSubmit={handleAddToDamage}>
                        <input  className="input input-bordered input-info w-full max-w-sm m-2" autoComplete='off'   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                        <input className="form-submit  btn btn-warning w-100 mb-2" type="submit" value="Add TO Damage"/>

                        </form>
                    </div> 
                    <div className='border border-primary rounded m-3 sm:w-2/4'>
                        <form className='m-2' onSubmit={handleRemoveDamage}>
                            <input  className="input input-bordered input-info w-full max-w-sm m-2" autoComplete='off'   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                            {
                               Pdata.Damage_Quntity == 0? <input className="form-submit  btn btn-error hover:bg-sky-700  text-white w-100 mb-2" disabled type="submit" value="Add Replac Stock"/>: <input className="form-submit  btn btn-error hover:bg-sky-700  text-white w-100 mb-2" type="submit"  value="Add Replac Stock"/>
                            }
  
                        </form>
                    </div>
                </div> 
                }
             </div>
            
        </div>
    );
};

export default Updatedamage;