import React from 'react';
import useBrand from '../../../Hooks/Brand/useBrand';
import useGroups from '../../../Hooks/Groups/useGroups';
import useProduct from '../../../Hooks/Product/useProduct';
import useSupplier from '../../../Hooks/Supplier/useSupplier';

const Addproduct = () => {
    const [Supplier, setSupplier] = useSupplier();
    const [Brand, setBrand] = useBrand();
    const [Product, setProduct] = useProduct();
    const [Groups, setGroups] = useGroups();

    return ( 
        <div style={{'width':'90%'}} className='mx-auto border-4' >
            <div>
                <h1 className='text-4xl btn'>  Add product  </h1>
            </div>
            <div className=''>
                <form>
                        {/* supplier faild  */}
                    <div className='flex '>
                        <div style={{'width':'20%'}}><p className='text-xl'>Supplier</p></div>
                        <div style={{'width':'80%'}}> 
                        
                        <select className="select select-primary " style={{'width':'90%'}}   name='suppl'>
                             <option disabled selected>Select Your Supplier</option>
                             {
                                    Supplier.map((s, index) => <option key={index + 1} value={s.Name}>{s.Reg_Name}</option>)
                            }
                            </select>
                            <a href="#Supplier-modal" style={{'width':'12px','height':'30px',}} className=" btn">+</a>
                            
                        </div>
                    </div>
                        {/* // group and product */}
                    <div style={{'width':'100%'}}  className='flex m-3 p-2'>
                        {/* // Group */}
                        <div style={{'width':'50%'}} className='flex '>
                            <div style={{'width':'30%'}}><p className='text-xl'>Group</p></div>
                            <div style={{'width':'70%'}}> 
                        
                                    <select className="select select-primary " style={{'width':'90%'}}   name='suppl'>
                                         <option disabled selected>Select Your Group</option>
                                         {
                                                Groups.map((s, index) => <option key={index + 1} value={s.Name}>{s.Group_Name}</option>)
                                        }
                                        </select>
                                        <a href="#Supplier-modal" style={{'width':'12px','height':'30px',}} className=" btn">+</a>
                            </div>
                             {/* // Product  Product_Name */}
                         </div>
                         <div style={{'width':'50%'}} className='flex '>
                                 <div style={{'width':'30%'}}><p className='text-xl'>Product</p></div>
                                    <div style={{'width':'70%'}}> 

                                        <select className="select select-primary " style={{'width':'90%'}}   name='suppl'>
                                             <option disabled selected>Select Your Product</option>
                                             {
                                                    Product.map((s, index) => <option key={index + 1} value={s.Product_Name}>{s.Product_Name}</option>)
                                            }
                                            </select>
                                            <a href="#Supplier-modal" style={{'width':'12px','height':'30px',}} className=" btn">+</a>
                                </div>
                        </div>
                    </div>
                            {/* Brand and style  */}
                    <div  style={{'width':'100%'}} className='flex m-3 p-2'>
                          {/* // Brand */}
                        <div  style={{'width':'50%'}} className='flex '>
                            <div style={{'width':'30%'}}><p className='text-xl'>Brand</p></div>
                            <div style={{'width':'70%'}}> 
                        
                                    <select className="select select-primary " style={{'width':'90%'}}   name='suppl'>
                                         <option className='text-xl' disabled selected>Select Your Group</option>
                                         {
                                                Brand.map((s, index) => <option className='text-xl' key={index + 1} value={s.Brand_Type_Name}>{s.Brand_Type_Name}</option>)
                                        }
                                        </select>
                                        
                                    <a href="#Supplier-modal" style={{'width':'12px','height':'30px',}} className=" btn">+</a>
                                            
                        </div>
                
                         </div>
                         {/* // size style */}
                         <div  style={{'width':'50%'}} className='flex justify-start '>
                                <div style={{'width':'30%'}} ><p className='text-xl'>Style/Size</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="text" style={{'width':'90%'}} placeholder="Type here" className="input input-bordered input-accent " />
                                    
                                </div>
                         </div>
                    </div>
                    {/* sbarcode and barcode  */}
                    <div  style={{'width':'100%'}} className='flex m-3 p-2'>
                          {/* // Brand */}
                        <div  style={{'width':'50%'}} className='flex '>
                        <div style={{'width':'30%'}} ><p className='text-xl'>sBarcode</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'90%'}} placeholder="12564985615498419514" className="input input-bordered input-accent "  disabled/>

                                </div>
                
                         </div>
                         {/* // size style */}
                         <div  style={{'width':'50%'}} className='flex '>
                                <div style={{'width':'30%'}} ><p className='text-xl'>Barcode</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'90%'}} placeholder="Type here" className="input input-bordered input-accent " />

                                </div>
                         </div>
                    </div>
                    {/* value and value set  */}
                    <div  style={{'width':'100%'}} className='flex m-3 p-2'>
                          {/* // CPU */}
                        <div  style={{'width':'40%'}} className='flex '>
                        <div style={{'width':'30%'}} ><p className='text-xl'>CPU</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'100%'}} placeholder="0.00" className="input input-bordered input-accent text-end text-xl"  />

                                </div>
                
                         </div>
                         {/* persentage  */}
                         <div  style={{'width':'20%'}} className='flex '>
                                <div className='mx-auto' style={{'width':'100%'}}>
                                    <span className='text-xl'>% </span> 
                                    <input  type="number" style={{'width':'50%'}} placeholder="0.00" className="input input-bordered input-accent text-end text-xl"  />

                                </div>
                
                         </div>
                         {/* // RPU */}
                         <div  style={{'width':'40%'}} className='flex '>
                                <div style={{'width':'30%'}} ><p className='text-xl'>RPU</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'90%'}} placeholder="0.00" className="input input-bordered input-accent text-end text-xl" />

                                </div>
                         </div>
                    </div>
                    {/* sbarcode and barcode  */}
                    <div  style={{'width':'100%'}} className='flex m-3 p-2'>
                          {/* // Brand */}
                        <div  style={{'width':'50%'}} className='flex '>
                        <div style={{'width':'30%'}} ><p className='text-xl'>sBarcode</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'90%'}} placeholder="12564985615498419514" className="input input-bordered input-accent "  disabled/>

                                </div>
                
                         </div>
                         {/* // size style */}
                         <div  style={{'width':'50%'}} className='flex '>
                                <div style={{'width':'30%'}} ><p className='text-xl'>Barcode</p></div>
                                <div style={{'width':'70%'}}>
                                    <input  type="number" style={{'width':'90%'}} placeholder="Type here" className="input input-bordered input-accent " />

                                </div>
                         </div>
                    </div>

                </form>

            </div>
            
        </div>
    );
};

export default Addproduct;