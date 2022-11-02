import React, { useState } from 'react';
import { Barcode, QRCode } from "@progress/kendo-react-barcodes";
import * as ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import { saveAs } from "@progress/kendo-file-saver";
import LoadTable from './LoadTable';
import Loadcomponent from './Loadcomponent';


const Qr = () => {
    const barcode = React.createRef();
    const qrcode = React.createRef();
    const [copySuccess, setCopySuccess] = useState('');

    const hadelonbr =(E) =>{
        setCopySuccess(E.target.value);

    }
   

    // ----------------------------------------------------------------
    const exportBarcode = () => {
        if (!barcode.current) {
          return;
        }
        barcode.current.exportImage().then((dataURI) => {
          saveAs(dataURI, `${copySuccess}.png`);
        });
      };

    //   ---------------------------------------------------------------- - 
    const exportQRCode = () => {
        if (!qrcode.current) {
          return;
        }
        qrcode.current.exportImage().then((dataURI) => {
          saveAs(dataURI, `${copySuccess}.png`);
        });
      };

      // -------------------------------------------------------
      const pdf = React.createRef();
      const saveAsPDF = () => {
        if (!pdf.current) {
          return;
        }
        pdf.current.save();
      };

    return (
        <div className='mx-auto '>
             <input type="text" onChange={hadelonbr} placeholder="text" class="input input-bordered mb-3" required />
             {
                !copySuccess ? <Loadcomponent className="mt-4"></Loadcomponent> : <div className='lg:flex '>
                <div className='w-6/12 border-2 p-2 m-2 mx-auto'>
                       <Barcode ref={barcode }  style={{'width':'300px', 'height':'100px'}}  className='mx-auto m-4 p-4' type="Code128" value={copySuccess} />
                       <Button 
                 fillMode={"flat"}
                 themeColor={"primary"}
                 onClick={exportBarcode}
                 className='btn'
               >
                 Download  Image
               </Button> 
            
                </div>
                <div className='w-6/12 border-2 p-2 m-2 mx-auto' >
                    <QRCode ref={qrcode} style={{'width':'250px', 'height':'250px'}} className='mx-auto  m-4 p-4' value={copySuccess} />
                    <Button className='btn'  fillMode={"flat"} file themeColor={"primary"}  onClick={exportQRCode}>Download Qr </Button>
                </div>
                </div>
             }
             



            
            
        </div>
    );
};

export default Qr;