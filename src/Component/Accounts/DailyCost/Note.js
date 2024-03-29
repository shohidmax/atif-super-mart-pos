import React, { useEffect, useState } from 'react'; 
import { toast } from 'react-hot-toast';
import useNote from '../../../Hooks/Accounts_hisab/useNote';
 
const Note = () => {
    const [Cash, setCash] = useNote(); 
    const [Cost, setCost] = useState([]); 

    // account cash Note  sum 
    let total = 0;

    for(const NotE of Cash){
    total = total + NotE.note * NotE.noteqty; 
    };
    // console.log(Cash);
    const netCash = (e) =>{
        e.preventDefault();
        const note = e.target.note.value;
        const noteqty = e.target.notevalue.value;
        const NoteAmound = note * noteqty; 
        const newBalance = {note, noteqty, NoteAmound };
        if (newBalance) {
            fetch('https://atifsupermart.onrender.com/note', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newBalance)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('note added successfully!!!');
                    e.target.reset();
                })
  
        }
        e.target.reset();
    } 
        // DELET ENGRY
        const handleBankDelete = (id) => {
            const proceed = window.confirm("Are you sure you want to delete?");
            if (proceed) {
              const url = `https://atifsupermart.onrender.com/note/${id}`;
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
            <div   className='  '>
                    <h1 className='text-xl'>Current Note Balance</h1>
                    <form onSubmit={netCash}>
                        <select name='note' className="select select-success  max-w-xs">
                        <option disabled selected name='notevalue'>Select Your Note</option >
                        <option value='1000'>1000 ৳</option>
                        <option value='500' >500 ৳</option>
                        <option value='200'>200 ৳</option>
                        <option value='100'>100 ৳</option>
                        <option value='50'>50 ৳</option>
                        <option value='20'>20 ৳</option>
                        <option value='10'>10 ৳</option>
                        <option value='5'>5 ৳</option>
                        <option value='2'>2 ৳</option>
                        <option value='1'>1 ৳</option>
                        </select>
                    <input name='notevalue'  autoComplete='off'    className="text-end input border-2 bg-red-100 sm:w-[250px] w-[150px] h-[50px] " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
                    <div  className="overflow-x-auto"  style={{'height':'350px'}}>
                        <table className="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Note </th>
                            <th>Note Qty</th>
                            <th>Note Value</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Cash.map((r,q) => (
                                    <tr>
                                    <th>{q + 1}</th>
                                    <td>{r.note} ৳</td>
                                    <td>{r.noteqty} </td>
                                    <td>{r.NoteAmound} ৳</td>
                                    <td><button className='btn btn-xs' onClick={() => handleBankDelete(r._id)}>x</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot className=' w-full overflow-x-auto '>
                            <tr>
                            <th>SN</th>
                            <th>Total</th>
                            <th></th>
                            <th className='text-xl text-green-500'>{total} ৳</th>
                            <th className='text-xl'>x/✔</th>
                            
                            </tr>
                        </tfoot>
                        </table>
                        </div>
            </div>
            
            
        </div>
    );
};

export default Note;