import React from 'react';
import { useRef } from 'react';
import ReactPrint, { useReactToPrint , generateAndSavePDF} from 'react-to-print';
import useGroups from '../../../Hooks/Groups/useGroups';
import logo from './logo.png';
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";
// style={{'font-family':'FontA11'}}

const Recept = () => {
    const rptdata = [
    
        {
         "product_barcode": "8901157001143",
         "product_title": "GOOD KNIGHT,LIQUID VAPORISER, POWER ACTIVE 45ML",
         "QTS": 1,
         "Column4": 0.78,
         "RPU": 95,
         "Column6": 94.22
        },
        {
         "product_barcode": "8941100500477",
         "product_title": "JUI,HAIR OIL,COCONUT OIL PET 100ML",
         "QTS": 1,
         "Column4": 0.62,
         "RPU": 75,
         "Column6": 74.38
        },
        {
         "product_barcode": "8941100510186",
         "product_title": "RADHUNI,MASALA,CORIANDER POWDER 100 GM",
         "QTS": 1,
         "Column4": 0.27,
         "RPU": 33,
         "Column6": 32.73
        } 
       ]
       const rpt = [
                {
         "product_title": "ATIF SUPER MART,MASALA,CARDAMOM 25GM (-+ 1G)",
         "product_barcode :": "1135903",
         "QTS": 1,
         "RPUS": 85,
         "RPffU": 85,
         "MC": 85
        },
        {
         "product_title": "GEMS BOND,CLEANER,DAMP FIX 2IN1 1LIT",
         "product_barcode :": "1184925",
         "QTS": 1,
         "RPUS": 65,
         "RPffU": 65,
         "MC": 65
        },
        {
         "product_title": "ATIF SUPER MART,SUGAR,SUGER LOCAL 1KG",
         "product_barcode :": "1498155",
         "QTS": 3,
         "RPUS": 120,
         "RPffU": 120,
         "MC": 360
        },
        {
         "product_title": "PUSTI,OIL,FORTIFIED SOYABIN OIL 3LIT",
         "product_barcode :": "3885522503003",
         "QTS": 1,
         "RPUS": 555,
         "RPffU": 555,
         "MC": 555
        },
        {
         "product_title": "PUSTI,OIL, FORTIFIED SOYABIN OIL 5L",
         "product_barcode :": "3885522505007",
         "QTS": 1,
         "RPUS": 895,
         "RPffU": 895,
         "MC": 895
        },
        {
         "product_title": "DAN CAKE,SHEMAI, LACCHA SHEMAI 250G",
         "product_barcode :": "764460655162",
         "QTS": 1,
         "RPUS": 145,
         "RPffU": 145,
         "MC": 145
        },
        {
         "product_title": "PRAN,DALL, MUSUR DALL DESHI 1KG",
         "product_barcode :": "831730008468",
         "QTS": 1,
         "RPUS": 155,
         "RPffU": 155,
         "MC": 155
        },
        {
         "product_title": "CONFIDENCE,SALT,CONFIDENCE VACUUM SALT 1KG",
         "product_barcode :": "8462136101105",
         "QTS": 2,
         "RPUS": 38,
         "RPffU": 38,
         "MC": 76
        },
        {
         "product_title": "PRAN,SAUCE,HOT TOMATO SAUCE 1KG",
         "product_barcode :": "846656006603",
         "QTS": 1,
         "RPUS": 190,
         "RPffU": 190,
         "MC": 190
        },
        {
         "product_title": "CIF,CLEANER,GLASS CLEANEAR 520ML",
         "product_barcode :": "8886467012105",
         "QTS": 1,
         "RPUS": 210,
         "RPffU": 210,
         "MC": 210
        },
        {
         "product_title": "DETTOL,TOILET CLEANER,HARPIC POWER PLUS 750ML",
         "product_barcode :": "8901396175025",
         "QTS": 1,
         "RPUS": 145,
         "RPffU": 145,
         "MC": 145
        },
        {
         "product_title": "RADHUNI,MASALA, CORIANDER POWDER 200GM",
         "product_barcode :": "8941100510193",
         "QTS": 1,
         "RPUS": 60,
         "RPffU": 60,
         "MC": 60
        },
        {
         "product_title": "VIM,DISHWASH,VIM BAR 300GM",
         "product_barcode :": "8941100619452",
         "QTS": 2,
         "RPUS": 40,
         "RPffU": 40,
         "MC": 80
        },
        {
         "product_title": "WHEEL,DETERGENT,WHEEL 2 IN 1 500GM",
         "product_barcode :": "8941102313129",
         "QTS": 3,
         "RPUS": 70,
         "RPffU": 70,
         "MC": 210
        },
        {
         "product_title": "WHEEL,SOAP, WHEEL BAR 125GM",
         "product_barcode :": "8941102314447",
         "QTS": 1,
         "RPUS": 30,
         "RPffU": 30,
         "MC": 30
        },
        {
         "product_title": "BASHUNDHARA,ATTA, ATTA 2KG",
         "product_barcode :": "8941193000526",
         "QTS": 5,
         "RPUS": 125,
         "RPffU": 125,
         "MC": 625
        },
        {
         "product_title": "ISPAHANI,TEA,MIRZAPORE BEST LEAF 400GM",
         "product_barcode :": "8941193314555",
         "QTS": 1,
         "RPUS": 205,
         "RPffU": 205,
         "MC": 205
        },
        {
         "product_title": "DIPLOMA,POWDER MILK,DIPLOMA FULL CREAM 500GM",
         "product_barcode :": "9415007013402",
         "QTS": 1,
         "RPUS": 420,
         "RPffU": 420,
         "MC": 420
        },
        {
            "product_title": "FRESH TISSUE TOILET TISSUE ROLE WHITE 1PCS",
            "product_barcode :": "8941161004914",
            "QTS": 2,
            "RPUS": 17
        }          
       ]

    const ref = useRef(); 
  const [Groups, setGroups] = useGroups(); 
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
                            <p className='fond-bold' style={{'font-size':'12px'}}> Print Date and Time : 11/10/2022 9:14:19 PM </p>
                        </div>
                        <div  className='text-start'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Invoice : 11102022AM01010016</p>
                        </div>
                        <div  className='text-start'>
                            <p className='fond-bold' style={{'font-size':'14px'}}>Coustomer :   </p>
                        </div>
                        <hr style={{'border':'1px dashed black'}} />
                        <hr/>
                    </div>
                    <div>
                            <div className="overflow-x-auto">
                              <table className="table mb-1 table-compact w-full">
                                <thead>
                                  <tr>
                                    <th>PrdInfo</th> 
                                    <th>Qty</th> 
                                    <th>Price</th> 
                                    <th>Total</th>
                                  </tr>
                                </thead>  
                              </table>
                                { //style={{'font-family':'FontA11'}}
                                    rptdata.map((r,q) => <>
                                     <h1 style={{'font-size':'14px', 'font-family':'FontA11'}} className='text-start bold'> {r.product_title}  </h1>
                                    <div  className='flex justify-between p-1'>
                                        <p className='fond-bold' style={{'font-size':'14px', 'font-family':'FontA11', 'font-wedth':'800'}}>{r.product_barcode} </p>  
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
                            <p className='fond-bold' style={{'font-size':'14px'}}>29.00</p>

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
                            <p className='fond-bold' style={{'font-size':'14px'}}>{total - 29}.00</p>

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
                    {/* <QRCode style={{'width':'250px', 'height':'250px'}} className='mx-auto' value="https://www.facebook.com/atifsupermart" /> */}


                        
                    </div>


                   
            </div> 
            
            <ReactPrint trigger={() => <button> print </button>} content={() => ref.current}/>
        </div>
    );
};

export default Recept;