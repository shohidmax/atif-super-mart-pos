import React from 'react';
// Supplier={Supplier} Brand={Brand} Groups={Groups} Product={Product} Products={Products} 
// {Supplier, Brand, Product, Groups, Products}
const Footer = ({Supplier, Brand, Product, Groups, Products}) => {
    return (
        <div>
            <ul>
            <li className='btn  btn-primary p-2 m-2 '> <input type="radio" name="radio-1" class="radio radio-accent"  checked/>{Brand.length} </li>
      <li  className='btn btn-primary p-2 m-2 '> <input type="radio" name="radio-2" class="radio radio-accent" checked />{Supplier.length} </li>
      <li  className='btn btn-primary p-2 m-2 '> <input type="radio" name="radio-3" class="radio radio-accent" checked />{Product.length} </li>
      <li  className='btn btn-primary p-2 m-2 '> <input type="radio" name="radio-6" class="radio radio-accent" checked />{Groups.length} </li>
      <li  className='btn btn-primary p-2 m-2 '> <input type="radio" name="radio-5" class="radio radio-accent" checked />{Products.length} </li>
            </ul>
             
        </div>
    );
};

export default Footer;