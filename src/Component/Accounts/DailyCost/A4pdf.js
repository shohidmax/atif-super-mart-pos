import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const A4pdf = () => {
    const { id } = useParams();
    const [data, setdata] = useState({}); 
    useEffect(() => {
      const url = `https://atifsupermart.onrender.com/accounts/${id}`;
      fetch(url)
        .then((r) => r.json())
        .then((data) => setdata(data));
    }, []);
const rol = {
    "_id": "64a81dbcb7ecdadc2d5c0aeb",
    "Hisab_ID": "pre771419",
    "Hisab_Date": "2023-07-03",
    "Hisab_txd": "2023-07-07T14:14:19.193Z",
    "Preious_amound": 7571,
    "Todays_Sales": "6321",
    "Total_Add_Money": 0,
    "Total_Add_Money_list": [],
    "Total_Bank": 560,
    "Total_Bank_list": [
        {
            "_id": "64a81d4cb7ecdadc2d5c0ae6",
            "Pay_Type": "Bkash",
            "Amound": "560"
        }
    ],
    "Total_Due": 0,
    "Total_Due_list": [],
    "Total_Cost": 0,
    "Total_Cost_list": [],
    "Total_Note": 10750,
    "Total_Note_list": [
        {
            "_id": "64a81da6b7ecdadc2d5c0ae7",
            "note": "1000",
            "noteqty": "10",
            "NoteAmound": 10000
        } 
    ],
    "Total_Cort": 0,
    "Total_Cort_list": [],
    "Hisab_Rest_Amound": 0,
    "COMP_AMOUND": -2632
};
    return (
        <div>
            <div className='border-4 m-4 p-4'>
                <div className='my-3'>
                    <h1 className='text-3xl  '> ATIF SUPER MART</h1>
                    <h1 className='text-xl  '> Accounts Report</h1>
                    <hr/>
                </div>
                <div>
                        <div className='flex justify-around p-1'>
                            <h2 className='text-2xl text-left'> Hisab ID : {data.Hisab_ID}</h2>
                            <h2 className='text-2xl text-justify'> Hisab Date : {data.Hisab_Date}</h2>
                            <h2 className='text-2xl text-start'> Previous Amount : {data.Preious_amound}</h2>
                             
                        </div>
                        <div className='flex justify-around p-1 text-left text-2xl'>
                            <h2 > Today Sale : {data.Todays_Sales}</h2>
                            <h2 > Total Add Money : {data.Total_Add_Money}</h2>
                            <h2 > Total Bank : {data.Total_Bank}</h2>
                             
                        </div>
                        <div className='flex justify-around p-1'>
                            <h2 className='text-2xl text-start'> Total Due : {data.Total_Due}</h2>
                            <h2 className='text-2xl text-start'> Total Cost : {data.Total_Cost}</h2>
                            <h2 className='text-2xl text-start'> Today Cash : {data.Total_Note}</h2>
                             
                        </div>
                        <div className='flex justify-around p-1'>
                            <h2 className='text-2xl text-start'> Total order : {data.Total_Cort}</h2>
                            <h2 className='text-2xl text-start'> Total rest Amound : {data.Hisab_Rest_Amound}</h2>
                            <h2 className='text-2xl text-start'> Last Amound : {data.COMP_AMOUND}</h2>
                            
                        </div>
                        <hr/>

                        <div>
                                <div className='flex justify-around'>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Payment Method</th>
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
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Bank}</h2>

                                        </div>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Note Qty</th>
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
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Note}</h2>

                                        </div>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Note Qty</th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cort_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.note}</td> 
                                                                    <td>{r.noteqty}</td> 
                                                                    <td>{r.NoteAmound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Note}</h2>

                                        </div>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Note Qty</th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cort_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.note}</td> 
                                                                    <td>{r.noteqty}</td> 
                                                                    <td>{r.NoteAmound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Note}</h2>

                                        </div>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Note Qty</th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cort_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.note}</td> 
                                                                    <td>{r.noteqty}</td> 
                                                                    <td>{r.NoteAmound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Note}</h2>

                                        </div>
                                        <div className='border-2'>
                                            <h1>Total Bank List </h1>
                                                <table className='text-left'>
                                                <tr>
                                                    <th>SN</th>
                                                    <th>Note</th>
                                                    <th> Note Qty</th>
                                                    <th> Amound</th>
                                                </tr>
                                                    {
                                                            data?.Total_Cort_list?.map((r,q) => (
                                                                <tr key={q + 1}>
                                                                    <td> {q + 1}</td> 
                                                                    <td> {r.note}</td> 
                                                                    <td>{r.noteqty}</td> 
                                                                    <td>{r.NoteAmound}</td> 
                                                                </tr> 
                                                            )) 
                                                        }
                                                        </table>
                                                        <hr/>
                                                        <h2>Total Bank Amound : {data.Total_Note}</h2>

                                        </div>


                                </div>
                                




                        </div>
                </div>


            </div>

            
        </div>
    );
};

export default A4pdf;