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
    
    console.log();

    return ( 
        <div style={{'width':'80%'}} className='mx-auto border-4' >
            <div>
                <h1 className='text-4xl btn'>
                    Add product 
                </h1>
            </div>
            <div className=''>
                <form>
{/* supplier faild  */}
                    <div className='flex '>
                        <div style={{'width':'20%'}}><p className='text-xl'>Supplier</p></div>
                        <div style={{'width':'80%'}}> 
                        
                            <select class="select select-primary w-full max-w-xs">
                             <option disabled selected>What is the best TV show?</option>
                             {
                                    Supplier.map((s, index) => <option key={index + 1} value={s.Name}>{s.Reg_Name}</option>)
                            }
                            </select>
                            <a href="#Supplier-modal" style={{'width':'12px','height':'30px',}} className=" btn">+</a>
                            
                        </div>
                    </div>
{/* // group and product */}
                    <div className='flex'>
                {/* // Group */}
                        <div className='flex '>
                        <div><p className='text-xl'>Group</p></div>
                        <div>
                            <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                            <a href="#Supplier-modal" className=" btn btn-xs">+</a>
                            
                        </div>
                {/* // Product */}
                         </div>
                         <div className='flex '>
                        <div><p className='text-xl'>Product</p></div>
                        <div>
                            <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                            <a href="#Supplier-modal" className=" btn btn-xs">+</a>
                            
                        </div>
                         </div>
                    </div>
{/* Brand and style  */}
                    <div className='flex'>
                {/* // Group */}
                        <div className='flex '>
                        <div><p className='text-xl'>Brand</p></div>
                        <div>
                            <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                            <a href="#Supplier-modal" className=" btn btn-xs">+</a>
                            
                        </div>
                {/* // Product */}
                         </div>
                         <div className='flex '>
                        <div><p className='text-xl'>Style/Size</p></div>
                        <div>
                            <input type="text" className="text-end" style={{'width':'150px','height':'20px',}} placeholder="0.00" /> 
                            <a href="#Supplier-modal" className=" btn btn-xs">+</a>
                            
                        </div>
                         </div>
                    </div>

                </form>

            </div>
            
        </div>
    );
};

export default Addproduct;