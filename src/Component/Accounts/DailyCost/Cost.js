import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import LoadVlogs from '../../Utilitis/LoadVlogs';
import useCost from '../../../Hooks/Accounts_hisab/useCost';

const Cost = () => { 
    const [Cost, setCost] = useCost();
    let total = 0;
  
    for(const NotE of Cost){
    total = total + Number(NotE.Amound); 
    };

    const handelCashAmound = async (e) => {
        e.preventDefault();
        const Pay_Name = await e.target.Cost_name.value;
        const Amound = await e.target.notevalue.value;
       
        const final_bank = await { Pay_Name, Amound }; 
        if (final_bank) {
            await fetch('https://atifsupermart.onrender.com/cost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(final_bank)
            })
                .then(res => res.json())
                . then(data => {
                     
                    toast.success('Cost added successfully!!!');
                    e.target.reset();
                })
        }
    };

    // DELET ENGRY
    const handleBankDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://atifsupermart.onrender.com/cost/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = Cost.filter((data) => data._id !== id);
                setCost(remaining);
              }
            });
        }
      };
    return (
        <div className=''> 
          <div className=' '>
          <h1 className='text-xl'>Daily Cost </h1>
                    <form onSubmit={ handelCashAmound}>
                    <input name='Cost_name'   required   className="text-end input border-2 bg-red-100 sm:w-[250px] w-[200px] h-[50px]" type="text" placeholder="Name of Cost" />

                    <input name='notevalue'  autoComplete='off' required   className="text-end input border-2 bg-red-100 sm:w-[150px] w-[120px]  h-[50px]" type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
          </div>
          <div>
          
           
           <div className="overflow-x-auto"  style={{'height':'350px'}}>
          <table className="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Pay Name </th>
                            <th>Amound</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Cost.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Pay_Name}</td>
                                    <td>{r.Amound} ৳ </td> 
                                    <td><button className='btn btn-xs' onClick={() => handleBankDelete(r._id)}>x</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot className=' w-full overflow-x-auto '>
                            <tr>
                            <th> SN</th>
                            <th>Total Value</th>
                            <th className='text-xl text-red-500'> {total}  ৳ </th>
                            <th className='text-xl'>x/✔</th>
                            
                            </tr>
                        </tfoot>
                        </table>
            </div>

          </div> 
        </div>
    );
};

export default Cost;