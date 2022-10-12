import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Updatedamage = () => {
    
    const {id} = useParams();
    const [Pdata, setPdata] = useState([]);
    // useEffect( () =>{
    //     const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
    //     fetch(url)
    //     .then(r => r.json())
    //     .then(data => setPdata(data));
    // }, [id]); 
 
     const handleDelever = (Delever) =>{
        const currentStock = parseFloat(Pdata.Stock_Qty);
        const value = 1;
        const reStock = currentStock - value;
         
        
        const updatedStock = {reStock};
        // update Quntity quntity to the server
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            // setPdata(data);
            alert('product quntity Delete successfully!');
            // event.target.reset();
            window.location.reload();
        })
     };
    

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const Stock_Qty = event.target.Stock_Qty.value;
        const reStock = parseFloat(Stock_Qty) + Pdata.Stock_Qty;
        const updatedStock = {reStock};
        // update Quntity quntity to the server
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            // setPdata(data);
            alert('product quntity added successfully!!!');
            event.target.reset();
            // window.location.reload();
        })
    };


    const findproduct = (B) =>{
        // setPdata = [];
        B.preventDefault();
        const Find = B.target.bangla.value;
        const url = `https://frozen-badlands-76581.herokuapp.com//damage-stock-update/${Find}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(r => r.json())
        .then(data => {
            if (!data) {
                return <progress class="progress w-56"></progress>;
            }else{
                setPdata(data)
            }
        });
        B.target.reset(); 
    };
    console.log(Pdata);



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





 
    return (
        <div className='container'>
            <div className='row'>
            <div className=" col-md-12 border border-primary rounded m-2">
            <div >
                <div>
                    <h2>Find Product {Pdata.length}</h2>
                    <form onSubmit={findproduct}> 
                        <input name="bangla"   className="input input-bordered input-info w-full max-w-sm m-2"   type="text" placeholder='Product Stock Quntity' required />
                        
                    </form>

                </div>
            
            <h2 className='text-left'>Name : {Pdata.Brand}{" "}{Pdata.Product}{" "} {Pdata.Style}</h2>
            <h2 className='text-left'>Stock : {Pdata.StockQty}</h2>
            <h2>Suppler : {Pdata.Supplier_Name} Ltd.</h2>
            <h1>Product Barcode : {Pdata.BarCode}</h1>
            <button onClick={handleDelever}  className='btn btn-danger w-25 mt-2'> Delevery</button>
            </div>
            <div className='border border-primary rounded m-3'>
                <form className='m-2' onSubmit={handleUpdateProduct}>
                <input  className="input input-bordered input-info w-full max-w-sm m-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Add Stock"/>
                
            </form>
            </div> 
            <div className='border border-primary rounded m-3'>
                <form className='m-2' onSubmit={handleUpdateProduct}>
                <input  className="input input-bordered input-info w-full max-w-sm m-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Add Stock"/>
                
            </form>
            </div>
             </div>
            </div>
        </div>
    );
};

export default Updatedamage;