import React, { useState,useEffect } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
 

const Testdata = () => {
    const [Sale, setSale] = useState([]);
    const [Products, setProducts] = useProducts();
    const data1 =[
        {
            "_id": "633f4e807784639f332e3b62",
            "Supplier_Name": "EGG",
            "BarCode": 111111,
            "Group": "MILK & DAIRY PRODUCTS",
            "Product": "EGG",
            "Brand": "EGG",
            "Style": "BROWN EGG 1PCS",
            "Stock_Qty": 0,
            "StockQty": 100,
            "CPU": 11.19,
            "CPU_Value": 0,
            "RPU": 12,
            "RPU_Value": 0,
            "Damage_Quntity": 0,
            "Comment": 0,
            "Status": "active",
            "orderq": 5
        },
        {
            "_id": "633f4e807784639f332e397f",
            "Supplier_Name": "ATIF SUPER MART",
            "BarCode": "1TK",
            "Group": "OTHERS",
            "Product": "ADJUSTMENT",
            "Brand": "ATIF SUPER MART",
            "Style": "ADJUSTMENT PRODUCT BILL 1TK",
            "Stock_Qty": 0,
            "StockQty": 1750,
            "CPU": 0.95,
            "CPU_Value": 0,
            "RPU": 1,
            "RPU_Value": 0,
            "Damage_Quntity": 0,
            "Comment": 0,
            "Status": "active",
            "orderq": 50
        }
    ];
    const data2 =[
        {
            "_id": "633f4e807784639f332e3b63",
            "Supplier_Name": "EGG",
            "BarCode": 222222,
            "Group": "MILK & DAIRY PRODUCTS",
            "Product": "EGG",
            "Brand": "EGG",
            "Style": "WHITE EGG 1PCS",
            "Stock_Qty": 0,
            "StockQty": 100,
            "CPU": 10.32,
            "CPU_Value": 0,
            "RPU": 11,
            "RPU_Value": 0,
            "Damage_Quntity": 0,
            "Comment": 0,
            "Status": "active",
            "orderq": 3
        },
        {
            "_id": "633f4e807784639f332e3b62",
            "Supplier_Name": "EGG",
            "BarCode": 111111,
            "Group": "MILK & DAIRY PRODUCTS",
            "Product": "EGG",
            "Brand": "EGG",
            "Style": "BROWN EGG 1PCS",
            "Stock_Qty": 0,
            "StockQty": 100,
            "CPU": 11.19,
            "CPU_Value": 0,
            "RPU": 12,
            "RPU_Value": 0,
            "Damage_Quntity": 0,
            "Comment": 0,
            "Status": "active",
            "orderq": 2
        },
        {
            "_id": "633f4e807784639f332e397f",
            "Supplier_Name": "ATIF SUPER MART",
            "BarCode": "1TK",
            "Group": "OTHERS",
            "Product": "ADJUSTMENT",
            "Brand": "ATIF SUPER MART",
            "Style": "ADJUSTMENT PRODUCT BILL 1TK",
            "Stock_Qty": 0,
            "StockQty": 1750,
            "CPU": 0.95,
            "CPU_Value": 0,
            "RPU": 1,
            "RPU_Value": 0,
            "Damage_Quntity": 0,
            "Comment": 0,
            "Status": "active",
            "orderq": 10
        }
    ];
    const addToCart = (barcode) => {
        // get barcode from search Input
        const getbarcode = barcode; 
        // find product from store or database 
        const getSerarchProduct = Products.find((p) => p.BarCode == getbarcode);
        const existe = Sale.find((i) => i.BarCode == getSerarchProduct.BarCode);
        // comparare local state and database
        let newMatch = getSerarchProduct == existe;
        // if data not store in object so get datat and set also aquantity
          if (newMatch == false) {
            if (!getSerarchProduct.StockQty == 0) {
              getSerarchProduct.orderq = 1;
              setSale([...Sale, getSerarchProduct]);
              
            } else {
              alert("Product Out of Stock!");
            }
          } else{
            // --------------------------------------------________________________________________________________________#############################
            const rolex = Sale.find((i) => i.BarCode == getbarcode);
            rolex.orderq = rolex.orderq + rolex.orderq;
            const rolex2 = [{rolex}]
              const maps = [...Sale];
            const maps2 = maps.map(obj => rolex2.find(o => o.BarCode === obj.BarCode) || obj);
            setSale([...Sale])
          }
        
       }

       
    const makeonearray = () =>{
        let a = [];
        const children = data1.concat(data2);
        for (const get of children) {
            let barcode = get.BarCode;
            let orderq = get.orderq; 
            a.push({barcode, orderq })  
        }
        console.log('----------------loop end for ---------');
        a.forEach(element=> {
            for(let i=0; i< element.orderq;i++){
                // addToCart(element.barcode);
           console.log(element.barcode)

           
           const getbarcode = element.barcode; 

           const selectedProduct = Products.find(p => p.BarCode == getbarcode); 
           let newCart = [];
           console.log(selectedProduct);
           const exists = Sale.find(product => product.BarCode === getbarcode);
           console.log(exists);
           if(!exists){ 
                selectedProduct.orderq = 1;
               newCart = [...Sale, selectedProduct];
               console.log(newCart,'nregjhfkfkkhhgfhjgfhjgfjhgfjfjfgh');
               console.log(selectedProduct.orderq);
           }
           else{
               const rest = Sale.filter(product => product.BarCode !== selectedProduct.BarCode);
               exists.orderq = exists.orderq + element.orderq;
               newCart = [...rest, exists];
           }
           
           setSale(newCart);
            console.log('//---------------------------------------------------------------');
           
        //    String(element.barcode)
            }
           return
           })
        console.log(a, 'a data '); 
        console.log(Sale, ' sale ');
       
         
    }
//  
        
    return (
        <div>
           <h1>fdfdasfd</h1>
           <button onClick={makeonearray} className='btn'>filter max number</button>
           
        </div>
    );
};

export default Testdata;
// const data =[
    //     {id: '12545584AM0101001'},
    //     {id: '12545584AM0101002'},
    //     {id: '12545584AM0101003'},
    //     {id: '12545584AM0101004'},
    //     {id: '12545584AM0101005'},
    //     {id: '12545584AM0101006'},
    //     {id: '12545584AM0101007'},
    //     {id: '12545584AM0101008'},
    //     {id: '12545584AM0101009'},
    //     {id: '12545584AM0101011'},
    //  ];
    //  const maxnum =()=>{
    //     let a = [];
    //     for (const p of data){ 
    //         a.push(Number(p.id.slice(-4))) 
    //     } 
    //       const max = Math.max(...a)
    //  console.log(max);
    
    //  }