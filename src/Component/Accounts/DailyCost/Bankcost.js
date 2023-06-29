import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Bankcost = () => { 
    const [bank, setbank] = useState([]);
 
    let total = 0;
    for(const NotE of bank){
    total = total + Number(NotE.Amound);
    };

    useEffect(() => {
        fetch('http://localhost:3002/bank')
        .then(r => r.json())
        .then(data => setbank(data))
      }, [bank]);
// console.log(bank);
    const handelBankAmound = (e) => {
        e.preventDefault();
        const Pay_Type = e.target.note.value;
        const Amound = e.target.notevalue.value;
       
        const final_bank = { Pay_Type, Amound };
        console.log(final_bank);
        if (final_bank) {
            fetch('http://localhost:3002/bank', {
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
          const url = `http://localhost:3002/bank/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = bank.filter((data) => data._id !== id);
                setbank(remaining);
              }
            });
        }
      };
    return (
        <div>
          
          <div>
          <h1 className='text-xl'>Bank cost </h1>
                    <form onSubmit={handelBankAmound}>
                        <select name='note' class="select select-success  max-w-xs">
                        <option disabled selected name='notevalue'>Select Payment </option >
                        <option value='Bkash'>BKASH</option>
                        <option value='DBBL'>DBBL</option>
                        <option value='ROCKET'>ROCKET</option>
                        <option value='NEXUS'>NEXUS</option>
                        <option value='BANK'>BANK</option>
                        <option value='DUE'>DUE</option>
                        </select>
                    <input name='notevalue'  autoComplete='off' required  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
          </div>
          <div>
          <div class="overflow-x-auto">
          <table class="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Pay Type </th>
                            <th>Amound</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bank.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Pay_Type}</td>
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
                            <th className='text-xl'> {total}  ৳ </th>
                            <th className='text-xl'>x/✔</th>
                            
                            </tr>
                        </tfoot>
                        </table>
            </div>

          </div>
        </div>
    );
};

export default Bankcost;