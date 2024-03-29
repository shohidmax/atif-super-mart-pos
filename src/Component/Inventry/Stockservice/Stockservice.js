import React, { useState } from 'react';
import useSupplier from '../../../Hooks/Supplier/useSupplier';
import useProducts from '../../../Hooks/useProducts/useProducts';
import img from './copy.png';
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import ReactPrint from 'react-to-print';
const Stockservice = () => {


const ref = useRef(); 
    const [Stock, setStock] = useState([]);
    const [Products, setProducts] = useProducts();
    const [Supplier, setSupplier] = useSupplier();
    const notify = (copyMe) => toast('Copied!');
    const [state, setstate] = useState('');

    // calculation
    let total = 0;
    let Product_quantity = 0;
    const totalPrice = 0;
  for(const product of Stock){
    total = total + product.CPU * product.Damage_Quntity;
    Product_quantity = Product_quantity + product.orderq;
   
  };
            // --------------------------------------------------------------------------------------------------
        // add to clip text
        const [copySuccess, setCopySuccess] = useState('');

        const copyToClipBoard = async copyMe => {
          try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
            notify()
          } catch (err) {
            setCopySuccess('Failed to copy!');
          }
      };

    const DevideSupplier = (e) =>{
        const supp = e.target.value;
        setstate(supp)
        const getSerarchProduct = Products.filter((p) => p.Supplier_Name == supp);
        setStock(getSerarchProduct);
    }
    // console.log(Supplier); 

    if (Products.length == 0) {
      return <div>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"><span>Loading Please Wait</span></div>
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

    </div>;
    }
    return (
        <div>
            <div>
                <h1 className='text-5xl'>Supplier Wise Damage Report {Products.length}</h1>
                <div className='m-2 pt-4'>
                    <form >
                    <select  onChange={DevideSupplier}  className="select select-primary w-full max-w-xs"  name='suppl'>
                             <option disabled selected>select Your supplier </option>
                             {
                                    Supplier.map((s, index) => <option key={index + 1} value={s.Name}>{s.Reg_Name}</option>)
                            }
                            </select>
                    </form>
                </div>
            </div>
            <div className=' p-4 m-2 mx-auto'>
              {
                Stock.length == 0 ? <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
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
              </div> : 
              
              <div  style={{'width':'100%'}}  ref={ref}  className="overflow-x-auto border-4 border-primary">
                <h1 className='m-2 mx-auto text-xl text-center'>{state}</h1>
                  <table style={{'width':'100%'}}  className="table table-compact w-full">
                    
                    <thead style={{'width':'210mm'}}>
                      <tr>
                        <th>SN</th> 
                        <th>Name</th>  
                        <th>barcode</th>  
                        <th>company</th> 
                        <th>BRAND</th> 
                        <th>CPU</th> 
                        <th>RPU</th> 
                        <th>Damage Qnt</th>
                        <th>Status</th>
                        <th>Value</th>
                      </tr>
                    </thead> 
                    <tbody>

                        {
                            Stock.map((r, index) => <tr key={index + 1}>
                            <th>{index + 1}</th> 
                            <td>{r.Brand}{' '}{r.Style}</td> 
                            <td>{r.BarCode} <button className="btn-outline  hover:bg-transparent hover:rounded-full hover:animate-bounce	 btn-xs" onClick={() => copyToClipBoard(r.BarCode)}><img style={{'width': '20px', 'height': 'auto'}} className='m-1' src={img} alt="" /></button> </td> 
                            <td>{r.Supplier_Name}</td> 
                            <td>{r.Brand}</td> 
                            <td>{r.CPU}</td> 
                            <td>{r.RPU}</td> 
                            <td className='text-2xl text-red-500'>{r.Damage_Quntity}</td> 
                            <td>{r.Status}</td> 
                            <td>{(r.Damage_Quntity * r.CPU).toFixed(2)}</td> 

                          </tr>)
                        }

                    </tbody> 
                    
                  </table>
                  <hr className='border-4 color-black-500'/>
                        <h1 className='text-2xl text-center m-2 p-2'>Total Damage : {total.toFixed(2)}</h1>
                </div>
              }
              <div>

              </div>
            
            </div>
            <ReactPrint trigger={() => <button> print</button>} content={() => ref.current}/>
        </div>
    );
};

export default Stockservice;

