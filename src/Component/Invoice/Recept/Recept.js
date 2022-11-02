import React from 'react';
import { useRef } from 'react';
import ReactPrint from 'react-to-print';
import useGroups from '../../../Hooks/Groups/useGroups';
import logo from './logo.png';
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";


const Recept = () => {
    const rptdata = [
        {
         "product_title": "FABER-CASTELL DUST FREE ERASER",
         "product_barcode": "|||||",
         "RPU": 5,
         "QTS": 3
        },
        {
         "product_title": "SIGMA KHATTA MEETHA 100GM",
         "product_barcode": 455500594555,
         "RPU": 45,
         "QTS": 6
        },
        {
         "product_title": "MISTIN LOW CALORIE SUGAR 200GM",
         "product_barcode": 1011000202126,
         "RPU": 230,
         "QTS": 9
        },
        {
         "product_title": "JULIE E VUSHE 3GM",
         "product_barcode": 101102020104,
         "RPU": 12,
         "QTS": 2
        }
       ];

    const ref = useRef(); 
  const [Groups, setGroups] = useGroups();
       // Price Calculation 
    let total = 0;
    let Product_quantity = 0;
    const totalPrice = 0;
  for(const product of rptdata){
    total = total + product.RPU * product.QTS;
    Product_quantity = Product_quantity + product.QTS;
    //  totalPrice = total * Product_quantity;
  };


    return (
        <div>
            <h1 className='text-4xl'>reacept </h1>
            <div ref={ref} style={{'width':'302.36px', 'height':'auto' }} className='bg-transparent p-2 border-2 mx-auto'> 
                    <div>
                        <img className='mx-auto' style={{'width':'50%'}} src={logo} alt="" />
                        <h1 className='text-center font-bold text-xl'> ATIF SUPER MART </h1>
                        <p  className='text-center font-bold' style={{'font-size':'12px'}}> H# 587/1at Floor, Tarokhadia <br/>
                            Dabtola, Rajpara, Rajshahi
                        </p>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <p className='fond-bold' style={{'font-size':'12px'}}>Shop ID : AM01 </p>
                            <p className='fond-bold' style={{'font-size':'12px'}}> searved by Shohid </p>
                        </div>
                        <div className='text-start'>
                            <p className='fond-bold' style={{'font-size':'12px'}}> Print Date and Time : 10/29/2022 8:14:19 PM </p>
                        </div>
                        <div  className='text-start'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Invoice : 546456564564564456465456456465</p>
                        </div>
                        <div  className='text-start'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Coustomer : Sarwar jahan  </p>
                        </div>
                        <hr style={{'border':'1px dashed black'}} />
                        <hr/>
                    </div>
                    <div>
                            <div class="overflow-x-auto">
                              <table class="table table-compact w-full">
                                <thead>
                                  <tr>
                                    <th>PrdInfo</th> 
                                    <th>Qty</th> 
                                    <th>Price</th> 
                                    <th>Total</th>
                                  </tr>
                                </thead> 
                              </table>
                                {
                                    rptdata.map((r,q) => <>
                                     <h1 className='text-start'> {r.product_title}  </h1>
                                    <div  className='flex justify-between p-1'>
                                        <p className='fond-bold' style={{'font-size':'14px', 'font-wedth':'800'}}>{r.product_barcode} </p>  
                                        <p className='fond-bold' style={{'font-size':'14px'}}>{r.QTS} </p>  

                                        <p className='fond-bold' style={{'font-size':'14px'}}>{r.RPU} </p>  
                                        <p className='fond-bold' style={{'font-size':'14px'}}>{r.RPU * r.QTS} </p>  
                                    </div>
                                    <hr style={{'border':'1px solid black'}}/>

                                    
                                    </>)
                                }
                            </div>

                    </div>
                    
                    <div className='mb-2'>
                        <div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Total Tk </p>
                            <p className='fond-bold' style={{'font-size':'14px'}}>{Product_quantity}  </p>
                            <p className='fond-bold' style={{'font-size':'14px'}}>{total}.00</p>

                        </div>
                        <div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Discount </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>0.00</p>

                        </div>
                        <div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Vat </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>0.00</p>

                        </div>
                        <hr style={{'border':'1px dashed black'}}/>
                        <div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Net Amound </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>{total}.00</p>

                        </div><div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Pay Type </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>CASH</p>

                        </div><div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Paid amound </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>{total}.00</p>

                        </div><div className='flex justify-between p-1'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Change Amound </p> 
                            <p className='fond-bold' style={{'font-size':'14px'}}>0.00</p>

                        </div>
                        <hr style={{'border':'1px dashed black'}}/>
                        <p className='fond-bold' style={{'font-size':'10px', 'width':'100%'}}>
                        item purchase can be exchanged within 48 hours with no exchange for item fastest can be refund for cash
                        </p>

                        <hr style={{'border':'1px dashed black'}}/>
                        <h1 className='text-center font-bold text-xl'> Thank You For Shopping </h1>
                    <QRCode style={{'width':'250px', 'height':'250px'}} className='mx-auto' value="https://www.facebook.com/atifsupermart" />


                        


                        

                        
                    </div>


                   
            </div>
            
            <ReactPrint trigger={() => <button> print</button>} content={() => ref.current}/>
        </div>
    );
};

export default Recept;