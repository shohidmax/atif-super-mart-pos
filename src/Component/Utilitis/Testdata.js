import React, { useState } from 'react';
// const barcode = require('barcode');
import Barcode from 'react-barcode';

const Testdata = () => {
    // const code39 = barcode('code39', {
    //     data: "it works",
    //     width: 400,
    //     height: 100,
    // });

    let productdata = {
        "_id": "633f4e807784639f332e3b62",
        "Supplier_Name": "EGG",
        "BarCode": 111111,
        "Group": "MILK & DAIRY PRODUCTS",
        "Product": "EGG",
        "Brand": "EGG",
        "Style": "BROWN EGG 1PCS",
        "Stock_Qty": 0,
        "StockQty": 124,
        "CPU": 11.19,
        "CPU_Value": 0,
        "RPU": 12,
        "RPU_Value": 0,
        "Damage_Quntity": 0,
        "Comment": 0,
        "Status": "active"
        };
        const addData = e =>{
            e.preventDefault();
            const inputData = e.targer.name.value;
            console.log(inputData);
            productdata.push(inputData);
            e.target.reset();

        }
        // --------------------------------------------------------------------------------------------------
        // add to clip text
        const [copySuccess, setCopySuccess] = useState('');

        const copyToClipBoard = async copyMe => {
            try {
              await navigator.clipboard.writeText(copyMe);
              setCopySuccess('Copied!');
            } catch (err) {
              setCopySuccess('Failed to copy!');
            }
        };
        
        


    return (
        <div>
            <div>
                    {/* <h1>{code39}</h1> */}
                    <Barcode value="barcode-example" />;
            </div>
            <form onSubmit={addData}>
                <input type="text" className='input border-primary' name='name' />
                <input className='btn' type="submit" />
            </form>
            <div>
            <button className='btn' onClick={() => copyToClipBoard('amar sonar bangla')}>hi</button>
            </div>
            
        </div>
    );
};

export default Testdata;