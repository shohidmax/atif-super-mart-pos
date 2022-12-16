import React from 'react';
 
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Barcode} from "@progress/kendo-react-barcodes";

const Salesreportq = () => {

  const pdf = React.createRef();
  const saveAsPDF = () => {
    if (!pdf.current) {
      return;
    }
    pdf.current.save();
  };
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
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    },
    {
      "product_title": "JULIE E VUSHE 3GM",
      "product_barcode": 101102020104,
      "RPU": 12,
      "QTS": 2
    }
  ];

  return (
    <div>
      <React.Fragment>
        <div className="example-config">
          <Button onClick={saveAsPDF}>Save As PDF...</Button>
        </div>

        <PDFExport className='border-2' fileName="barcodes.pdf" paperSize="A4" margin="2cm" ref={pdf}>
          <div className='border-2 grid grid-cols-5' style={{ 'width': '100%', 'height': '100%' }} >
            {
              rptdata.map((r, q) => <>
                <div className='m-4 p-4 border-4' style={{ 'width': '100%', 'height': '100%' }}>
                  <h1>ATIF SUPER MART</h1>
                  <h1>{r.product_title}</h1>
                  <Barcode className='mx-auto' style={{ 'width': '60%', 'height': '25%' }} type="Code128" value="22554788555" />
                  <h1>Price: {r.RPU}</h1>
                </div>
              </>)
            }

          </div>

        </PDFExport>
      </React.Fragment>

    </div>
  );
};

export default Salesreportq;

//    <QRCode value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
//  <Barcode type="Code128" value="2255455544555588888777788555" />
// 



