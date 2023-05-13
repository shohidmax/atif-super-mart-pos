import React , {useState}from 'react';
import { useRef } from 'react';
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";
import ReactPrint from 'react-to-print';


const BarCode = () => {
    const ref = useRef(); 
    const barcode = React.createRef();
    const [barc, setBarc] = useState([]);
    let demoArray = [] 
const data = [
        {
            'title':'ATIF SUPER MART',
            'barcode':'123456',
            'qty':'60',
            'price':'50'
        },
        {
            'title':'ATIF SUPER MART',
            'barcode':'ggggg',
            'qty':'2',
            'price':'150'
        }

    ];
        data.forEach(element=> {
             for(let i=0; i< element.qty;i++){
            demoArray.push(element)
             }
            return
            })
console.log(demoArray)
   
    

    return (
        <div className='mx-auto bg-white'  style={{'width':'793.70px', 'height':'1122.51px'}}>
            <div className='grid grid-cols-5 bg-white border-4' paperSize="A4" ref={ref} >
                
               {
                demoArray.map((r,q) => {
                    return(
                        <div  className=' mx-auto mb-2 bg-white' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>{r.title}</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value={r.barcode} />
                    <h1 className='mx-auto text-center'>Price: {r.price} ৳</h1>
                    
                </div>
                    ) 
                })
               }
        
               
            </div>



            <ReactPrint trigger={() => <button className='btn'> print</button>} content={() => ref.current}/>
            
        </div>
    );
};

export default BarCode;


{/* <div  className=' mx-auto mb-2 bg-transparent' style={{'width':'150px', 'height':'96'}}>
<h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
<p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
<Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
<h1 className='mx-auto text-center'>Price: 500 ৳</h1>

</div> */}