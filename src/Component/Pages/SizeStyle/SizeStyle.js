import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts/useProducts';

const SizeStyle = () => {
    const [Products, setProducts] = useProducts();
    return (
<div className='w-3/4 mx-auto'>
        <div className='flex justify-between p-4 m-4'>
            <h3 className='text-5xl'>Style Size Setup </h3>
            <button className='btn btn-primary'>Reload {Products.length}</button>
        </div>
 <div className='border-2 p-4 m-4'>
        <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
    {
                            Products.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.Producrt_title}</td>
                                <td>{a.OrderQty}</td>
                                <td>{a.city},{a.state},{a.zipcode}</td>
                                <td>{a.unitprice}</td>
                                <td>$ {a.payprice}</td>
                                <td>
                                    {(a.payprice && !(a.paid)) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn  btn-danger'>Pay Now</button></Link>}
                                    {(a.payprice && a.paid) && <div>
                                        <p><span className='text-success btn btn-sucess'>Paid</span></p>
                                        
                                    </div>}
                                </td>
                            </tr>)
                        }
      

    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
            </div>
            
        </div>
    );
};

export default SizeStyle;