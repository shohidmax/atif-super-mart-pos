import React from 'react';
import { useRef } from 'react';
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";
import ReactPrint from 'react-to-print';


const BarCode = () => {
    const ref = useRef(); 
    const barcode = React.createRef();

    return (
        <div>
            <div className='grid grid-cols-5 border 4' paperSize="A4" ref={ref} >
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
                
                <div className='border-2 mx-auto mb-2' style={{'width':'150px', 'height':'96'}}>
                    <h1 className='mx-auto bolded  text-center'>ATIF SUPER MART</h1>
                    <p style={{'font-size':'10px'}} className='mx-auto  text-center'>PRAN CHANACHUR BRBQ FLAVOUR 250GM</p>
                    <Barcode ref={barcode }   style={{'width':'130px', 'height':'35px'}}  className='mx-auto m-1 p-1' type="Code128" value='8850356205152' />
                    <h1 className='mx-auto text-center'>Price: 500</h1>
                    
                </div>
        
               
            </div>



            <ReactPrint trigger={() => <button className='btn'> print</button>} content={() => ref.current}/>
            
        </div>
    );
};

export default BarCode;