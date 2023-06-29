import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import LoadVlogs from '../../Utilitis/LoadVlogs';

const Cost = () => { 
    const [Cost, setCost] = useState([]);
let total = 0;
  
for(const NotE of Cost){
total = total + Number(NotE.Amound); 
};

    useEffect(() => {
        fetch('http://localhost:3002/cost')
        .then(r => r.json())
        .then(data => setCost(data))
      }, [Cost]);
// console.log(bank);
    const handelCashAmound = (e) => {
        e.preventDefault();
        const Pay_Name = e.target.Cost_name.value;
        const Amound = e.target.notevalue.value;
       
        const final_bank = { Pay_Name, Amound };
        console.log(final_bank);
        if (final_bank) {
            fetch('http://localhost:3002/cost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(final_bank)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Bank amound added successfully!!!');
                    e.target.reset();
                })
  
        }
    };

    // DELET ENGRY
    const handleBankDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `http://localhost:3002/cost/${id}`;
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
            
          
          <div>
          <h1 className='text-xl'>Daily Cost </h1>
                    <form onSubmit={handelCashAmound}>
                    <input name='Cost_name'   required  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="text" placeholder="Name of Cost" />

                    <input name='notevalue'  autoComplete='off' required  style={{'width':'150px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
          </div>
          <div>
          
           
           <div class="overflow-x-auto">
          <table class="table w-full overflow-x-auto">
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