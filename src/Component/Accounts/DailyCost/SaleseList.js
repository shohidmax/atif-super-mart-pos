import React, { useRef, useState } from 'react';
import useAccounts from '../../../Hooks/Accounts_hisab/useAccounts';  
import LoadVlogs from '../../Utilitis/LoadVlogs'; 
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'; 
import { JsonToExcel } from 'react-json-to-excel';
import LoadTable from '../../Utilitis/LoadTable';
import LoadingSpin from '../../Utilitis/LoadingSpin/LoadingSpin';
import { isDisabled } from '@testing-library/user-event/dist/utils';



const SaleseList = () => {
    const today = new Date().toJSON().slice(0, 10);
    // api accountsreportbydate
    const ref = useRef(); 
    const [Account, setAccount] = useState([]); 
    const [lol, setlol] = useState(true); 
    const hadelGetdata = e => {
        e.preventDefault();
        const sdate = e.target.sdate.value;
        const edate = e.target.edate.value; 
        const url = `https://atifsupermart.onrender.com/accountsreportbydate?sdate=${sdate}&edate=${edate}`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                if (!data.length) {
                    return toast.error('Data Load faild Please Try again !!!')
                }
                toast.success('Data Load Succesfully !!!') 
                setAccount(data); 
                setlol(false)
            })
    } 
    const [Accounts, setAccounts] = useAccounts();
    if (Accounts.length == 0) {
        return <LoadVlogs/>;
    }
    const handeldeleteAmound = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://atifsupermart.onrender.com/accounts/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = Accounts.filter((data) => data._id !== id);
                setAccounts(remaining);
              }
            });
        }
    }  
 const q ={
    "_id": "64a81d2ab7ecdadc2d5c0ae4",
    "Hisab_ID": "pre771152",
    "Hisab_Date": "2023-07-02",
    "Hisab_txd": "2023-07-07T14:11:52.171Z",
    "Preious_amound": 17923,
    "Todays_Sales": "6471",
    "Total_Add_Money": 0,
    "Total_Add_Money_list": [],
    "Total_Bank": 1295,
    "Total_Bank_list": [
        {
            "_id": "64a81c8bb7ecdadc2d5c0ade",
            "Pay_Type": "Bkash",
            "Amound": "1295"
        }
    ],
    "Total_Due": 528,
    "Total_Due_list": [
        {
            "_id": "64a81c7ab7ecdadc2d5c0add",
            "Due_Name": "dammy",
            "Amound": "528"
        }
    ],
    "Total_Cost": 15000,
    "Total_Cost_list": [
        {
            "_id": "64a81ca1b7ecdadc2d5c0adf",
            "Pay_Name": "shahriar widrow",
            "Amound": "15000"
        }
    ],
    "Total_Note": 7571,
    "Total_Note_list": [
        {
            "_id": "64a81cb4b7ecdadc2d5c0ae1",
            "note": "1000",
            "noteqty": "7",
            "NoteAmound": 7000
        },
        {
            "_id": "64a81cb4b7ecdadc2d5c0ae0",
            "note": "500",
            "noteqty": "1",
            "NoteAmound": 500
        },
        {
            "_id": "64a81cbeb7ecdadc2d5c0ae2",
            "note": "10",
            "noteqty": "7",
            "NoteAmound": 70
        },
        {
            "_id": "64a81cc5b7ecdadc2d5c0ae3",
            "note": "1",
            "noteqty": "1",
            "NoteAmound": 1
        }
    ],
    "Total_Cort": 0,
    "Total_Cort_list": [],
    "Hisab_Rest_Amound": 0,
    "COMP_AMOUND": 0
};
    let totalbank = 0;
    for(const NotE of Account){
    totalbank = totalbank + Number(NotE.Total_Bank);
    };
    let totalCost = 0;
    for(const NotE of Account){
        totalCost = totalCost + Number(NotE.Total_Cost);
    };
    let totalNote = 0; 
    for(const Total_Note of Account){
        totalNote = totalNote + Number(Total_Note?.Total_Note); 
    }; 
    let totalDue = 0; 
    for(const Total_Note of Account){
        totalDue = totalDue + Number(Total_Note?.Total_Due); 
    }; 
    let totalrest = 0; 
    for(const Total_Note of Account){
        totalrest = totalrest + Number(Total_Note?.Hisab_Rest_Amound); 
    }; 
    let totalAddmoney = 0; 
    for(const Total_Note of Account){
        totalAddmoney = totalAddmoney + Number(Total_Note?.Total_Add_Money); 
    };  
    let totalsales = 0; 
    for(const Total_Note of Account){
        totalsales = totalsales + Number(Total_Note?.Todays_Sales); 
    };  

    return (
        <div> 
            <div>
                <div className='p-2 mx-auto'>
                    
                    <form className='' onSubmit={hadelGetdata}>
                    <input name="sdate" className="input  overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="date" placeholder='Enter Your BarCode Hare' required />
                    <input name="edate" className="input  overflow-hidden input-bordered input-secondary w-full max-w-xs m-2 p-2 m-auto" type="date" placeholder='Enter Your BarCode Hare' required />
                    <input type="submit" value='submit' className='btn btn-primary' />

                    </form>
                </div>
            </div>
            
            <div ref={ref} className='p-4 m-4 mx-auto'>
                <div className='my-3 text-center'>
                                 <h1   className='text-3xl  '> ATIF SUPER MART</h1>
                                 <h1 className='text-xl  '> Accounts Report</h1>
                                 <hr style={{'border':'1px solid black'}}/>
                </div>
                <div class="overflow-x-auto"> 
                <table class="table table-zebra table-xl"> 
                    <thead className='bg-blue-200'>
                    <tr className='text-lg text-black  text-bold'>
                        <th>SN</th>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Previous ৳</th>
                        <th>Salese</th>
                        <th>Add money</th>
                        <th>Bank</th>
                        <th>Cost</th>
                        <th>Cash</th>
                        <th>Cort</th>
                        <th>Due</th>
                        <th>Rest_Amound</th>
                        <th>Final Sum</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody> 
                            { 
                                Account.map((r,q) => (
                                    <tr className='text-black' key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Hisab_Date}</td>
                                    <td>{r.Hisab_ID}  </td> 
                                    <td>{r.Preious_amound} ৳ </td> 
                                    <td>{r.Todays_Sales} ৳ </td> 
                                    <td>{r.Total_Add_Money} ৳ </td> 
                                    <td>{r.Total_Bank} ৳ </td> 
                                    <td>{r.Total_Cost} ৳ </td> 
                                    <td>{r.Total_Note} ৳ </td> 
                                    <td>{r.Total_Cort} ৳ </td> 
                                    <td>{r.Total_Due} ৳ </td> 
                                    <td>{r.Hisab_Rest_Amound} ৳ </td> 
                                    <td>{r.COMP_AMOUND} ৳ </td> 
                                    <td> 
                                        <button className='btn btn-xs btn-error m-1' onClick={() => handeldeleteAmound(r._id)}>x</button>
                                        <button className='btn btn-xs text-white btn-primary m-1' onSubmit={() => handeldeleteAmound(r._id)}>✎</button>
                                        
                                        <Link to={`/pdf2/${r._id}`}><button className='btn btn-xs btn-success m-1' >📃</button></Link> 
                                    </td>
                                    </tr>
                                )) 
                            }
                    </tbody>
                    <tfoot className='bg-blue-200'>
                    <tr className='text-lg text-black  text-bold'>
                        <th>SN</th>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Previous ৳</th>
                        <th>{totalsales}</th>
                        <th>{totalAddmoney}</th>
                        <th>{totalbank}</th>
                        <th>{totalCost}</th>
                        <th>{totalNote}</th>
                        <th>Cort</th>
                        <th>{totalDue}</th>
                        <th>{totalrest}</th>
                        <th>Final Sum</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>
                </table>
                </div>
            </div> 
        {lol == true ? <button></button> : <JsonToExcel className="dfx "  title="Download excel" data={Account}  fileName={`${today} Account Backup`} />}
       

        </div>
    );
};

export default SaleseList;

 