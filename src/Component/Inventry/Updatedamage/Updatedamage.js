import React, { useEffect, useState } from 'react';
const Updatedamage = () => {
    const [Pdata, setPdata] = useState([]);


    const findproduct = (B) =>{
        B.preventDefault();
        const Find = B.target.bangla.value;
        const url = `http://localhost:5000/damage-stock-update/${Find}`;
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
                setPdata(data);
            }
        });
        B.target.reset(); 
    };

    const handleAddToDamage = event =>{
        event.preventDefault();
        const ids = Pdata._id; 
        console.log('remover id ', ids);
        const Damage_Quntity = event.target.Stock_Qty.value;
        const reStock = parseFloat(Damage_Quntity) + Pdata.Damage_Quntity;
        const updatedStock = {reStock};
 
        const url = `http://localhost:5000/handleAddToDamage/${ids}`;
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
            alert('product quntity added successfully!!!');
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
 
        const url = `http://localhost:5000/handleAddToDamage/${ids}`;
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
            alert('product quntity added successfully!!!');
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





 
    return (
        <div className='container'>
            
            <div className=" w-10/12 border border-primary rounded m-2 mx-auto">
            <div >
                <div>
                    <h2 className='online'>Find Product {Pdata.length}</h2>
                    <form onSubmit={findproduct}> 
                        <input name="bangla"   className="input input-bordered input-info w-full max-w-sm m-2"   type="text" placeholder='Product Stock Quntity' required />
                        
                    </form>

                </div>
                <div className='flex p-3 m-2 text-left mx-auto'>
                    <div>
                    <h2 className=''>Name : {Pdata.Brand}{" "}{Pdata.Product}{" "} {Pdata.Style}</h2>
                    <h2 className=''>Stock : {Pdata.StockQty}</h2>
                    <h2>Suppler : {Pdata.Supplier_Name} Ltd.</h2>
                    <h2>Damage : {Pdata.Damage_Quntity} Ltd.</h2>
                    <h1>Product Barcode : {Pdata.BarCode}</h1>
                    <input type="radio" name="radio-4" class="radio radio-accent" checked />


                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div className=' mx-auto'>
                    <h2 className=''>Name : {Pdata.Brand}{" "}{Pdata.Product}{" "} {Pdata.Style}</h2>
                    <h2 className=''>Stock : {Pdata.StockQty}</h2>
                    <h2>Suppler : {Pdata.Supplier_Name} Ltd.</h2>
                    <h1>Product Barcode : {Pdata.BarCode}</h1>

                    </div>
                </div>
            

            {/* <button onClick={handleDelever}  className='btn btn-danger w-25 mt-2'> Delevery</button> */}
            </div>
                <div className='flex '>
                    <div className='border border-primary rounded m-3 w-2/4'>
                        <form className='m-2' onSubmit={handleAddToDamage}>
                        <input  className="input input-bordered input-info w-full max-w-sm m-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                        <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Add TO Damage"/>

                        </form>
                    </div> 
                    <div className='border border-primary rounded m-3 w-2/4'>
                        <form className='m-2' onSubmit={handleRemoveDamage}>
                            <input  className="input input-bordered input-info w-full max-w-sm m-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />
                            <input className="form-submit  btn btn-primary w-100 mb-2" type="submit" value="Add Replac Stock"/>

                        </form>
                    </div>
                </div>
             </div>
            
        </div>
    );
};

export default Updatedamage;