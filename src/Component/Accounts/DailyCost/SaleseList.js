import React from 'react';
import useAccounts from '../../../Hooks/Accounts_hisab/useAccounts'; 
import Loadcomponent from '../../Utilitis/Loadcomponent';
import LoadVlogs from '../../Utilitis/LoadVlogs';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, renderToFile, usePDF} from '@react-pdf/renderer'; 
import { Link } from 'react-router-dom';



const SaleseList = () => {

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


  



    return (
        <div>
            <h1>{Accounts.length}</h1>
            <div className='p-4 m-4 mx-auto'>
            <div class="overflow-x-auto">
                <table class="table table-zebra"> 
                    <thead className='bg-blue-200'>
                    <tr className='text-lg text-color-black  text-bold'>
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
                        <th>Rest_Amound</th>
                        <th>Final Sum</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody> 
                            {
                                Accounts.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Hisab_Date}</td>
                                    <td>{r.Hisab_ID} ৳ </td> 
                                    <td>{r.Preious_amound} ৳ </td> 
                                    <td>{r.Todays_Sales} ৳ </td> 
                                    <td>{r.Total_Add_Money} ৳ </td> 
                                    <td>{r.Total_Bank} ৳ </td> 
                                    <td>{r.Total_Cost} ৳ </td> 
                                    <td>{r.Total_Note} ৳ </td> 
                                    <td>{r.Total_Cort} ৳ </td> 
                                    <td>{r.Hisab_Rest_Amound} ৳ </td> 
                                    <td>{r.COMP_AMOUND} ৳ </td> 
                                    <td> 
                                        <button className='btn btn-xs btn-error m-1' onSubmit={() => handeldeleteAmound(r._id)}>x</button>
                                        <button className='btn btn-xs text-white btn-primary m-1' onSubmit={() => handeldeleteAmound(r._id)}>✎</button>
                                        
                                        <Link to={`/pdf2/${r._id}`}><button className='btn btn-xs btn-success m-1' >📃</button></Link>
                                
                                        
                                    
                                    </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default SaleseList;

const a = {
    "_id": "64a7fca69a5ce30c9b2d6b00",
   "Hisab_ID": "pre77538",
   "Hisab_Date": "2023-07-07",
   "Hisab_txd": "2023-07-07T11:53:08.611Z",
   "Preious_amound": 12630,
   "Todays_Sales": "12956",
   "Total_Add_Money": 0,
   "Total_Add_Money_list": [],
   "Total_Bank": 2302,
   "Total_Bank_list": [
   {
   "_id": "64a7f86dacf44a1a85c75c79",
   "Pay_Type": "DBBL",
   "Amound": "622"
   },
   {
   "_id": "64a7f898acf44a1a85c75c7a",
   "Pay_Type": "BANK",
   "Amound": "1680"
   }
   ],
   "Total_Due": 985,
   "Total_Due_list": [
   {
   "_id": "64a7f90cacf44a1a85c75c81",
   "Due_Name": "bangladesh",
   "Amound": "985"
   }
   ],
   "Total_Cost": 10344,
   "Total_Cost_list": [
   {
   "_id": "64a7f85dacf44a1a85c75c78",
   "Pay_Name": "bangladesh",
   "Amound": "10344"
   }
   ],
   "Total_Note": 11370,
   "Total_Note_list": [
   {
   "_id": "64a7f8a3acf44a1a85c75c7b",
   "note": "1000",
   "noteqty": "11",
   "NoteAmound": 11000
   },
   {
   "_id": "64a7f8a8acf44a1a85c75c7c",
   "note": "200",
   "noteqty": "1",
   "NoteAmound": 200
   },
   {
   "_id": "64a7f8b6acf44a1a85c75c7e",
   "note": "100",
   "noteqty": "1",
   "NoteAmound": 100
   },
   {
   "_id": "64a7f8c1acf44a1a85c75c7f",
   "note": "10",
   "noteqty": "7",
   "NoteAmound": 70
   }
   ],
   "Total_Cort": 0,
   "Total_Cort_list": [],
   "Hisab_Rest_Amound": 0,
   "COMP_AMOUND": -585
       };