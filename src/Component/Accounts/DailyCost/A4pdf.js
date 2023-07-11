import { Barcode } from '@progress/kendo-react-barcodes';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const A4pdf = () => {
    const { id } = useParams();
    const ref = useRef(); 

    const [data, setdata] = useState({}); 
    useEffect(() => {
      const url = `https://atifsupermart.onrender.com/accounts/${id}`;
      fetch(url)
        .then((r) => r.json())
        .then((data) => setdata(data));
    }, []); 
 
    return (
        <div>
            <div ref={ref} className='border-4 m-4 p-4'>
                <div className='my-3 text-center'>
                                 <h1   className='text-3xl  '> ATIF SUPER MART</h1>
                                 <h1 className='text-xl  '> Accounts Report</h1>
                                 <hr style={{'border':'1px solid black'}}/>
                </div>
                <div>
                        <div className='flex justify-around'>
                        <div className='flex flex-col  p-1 text-start'>
                            <h2> Hisab ID : {data.Hisab_ID}</h2>
                            <h2> Hisab Date : {data.Hisab_Date}</h2>
                            <h2> Previous Amount : {data.Preious_amound}</h2>
                             
                        </div>
                        <div className='flex flex-col p-1 text-start '>
                            <h2 > Today Sale : {data.Todays_Sales}</h2>
                            <h2 > Total Add Money : {data.Total_Add_Money}</h2>
                            <h2 > Total Bank : {data.Total_Bank}</h2>
                             
                        </div>
                        <div className='flex flex-col p-1 text-start'>
                            <h2  > Total Due : {data.Total_Due}</h2>
                            <h2 > Total Cost : {data.Total_Cost}</h2>
                            <h2> Today Cash : {data.Total_Note}</h2>
                             
                        </div>
                        <div className='flex flex-col p-1 text-start'>
                            <h2> Total order : {data.Total_Cort}</h2>
                            <h2> Total rest Amound : {data.Hisab_Rest_Amound}</h2>
                            <h2> Last Amound : {data.COMP_AMOUND}</h2>
                            
                        </div>
                        </div>
                                     <hr style={{'border':'1px solid black'}}/>

                        <div>
                                <div className=' grid grid-cols-3 p-2 gap-4 '>
                                <div className=' '>
                                                         <h1 className=' text-xl text-center'>Total Cost List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table table-xs'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Name</th> 
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cost_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.Pay_Name}</td>  
                                                                    <td>{r.Amound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Note Amound : {data.Total_Cost}</h2>

                                        </div>
                                        <div className=' '>
                                                         <h1 className=' text-xl text-center'>Total Cort List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table table-xs'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Name</th> 
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cort_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.Cort_Name}</td>  
                                                                    <td>{r.Amound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Cort Amound : {data.Total_Cort}</h2>

                                        </div>
                                       
                                        <div className=' '>
                                        <h1 className=' text-xl text-center'>Total Note List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table table-xs'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Qty</th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Note_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.note}</td> 
                                                                    <td>{r.noteqty}</td> 
                                                                    <td>{r.NoteAmound}</td> 
                                                                </tr>
                                                                
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Note Amound : {data.Total_Note}</h2>

                                        </div>
                                        <div className=' '>
                                                         <h1 className=' text-xl text-center'>Total Due List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table table-xs'>
                                                <tr>
                                                    <th>SN</th> 
                                                    <th> Name </th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Due_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.Due_Name}</td> 
                                                                    <td>{r.Amound}</td>  
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Due Amound : {data.Total_Due}</h2>

                                        </div>
                                        <div className=' '>
                                                         <h1 className=' text-xl text-center'>Total Bank List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table  table-xs'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Name </th>
                                                    <th>Amound</th>
                                                </tr>
                                                
                                                    {
                                                            data?.Total_Bank_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.Pay_Type}</td> 
                                                                    <td>{r.Amound}</td> 
                                                                </tr>
                                                                
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Bank Amound : {data.Total_Bank}</h2>

                                        </div>
                                         
                                        <div className=' '>
                                                         <h1 className=' text-xl text-center'>Total Add Money List </h1>
                                    <hr style={{'border':'1px solid black'}}/>

                                                <table className='text-left table table-xs'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Name</th> 
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Add_Money_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.Payee_Name}</td>  
                                                                    <td>{r.Amound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                                     <hr style={{'border':'1px solid black'}}/>
                                                        <h2>Total Add Money : {data.Total_Add_Money}</h2>
 
                                        </div>
 
                                </div> 
                                <Barcode    style={{'width':'300px', 'height':'40px'}}  className='mx-auto m-2 p-2' type="Code128" value={data?._id} />
                                 
                        </div>
                </div>


            </div>
            <hr style={{'border':'1px solid black'}}/>
            <ReactToPrint className='border' trigger={() => <button className='btn-primary btn m-2 p-2'> print </button>} content={() => ref.current}/>


            
        </div>
    );
};

export default A4pdf;