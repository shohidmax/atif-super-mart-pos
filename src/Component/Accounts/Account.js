import React, { useState } from 'react';

const Account = () => {
    const [Cash, setCash] = useState([]);
    const [Bank, setBank] = useState([]);
    const [Cost, setCost] = useState([]);
    const [Bycost, setBycost] = useState([]);

///// account cash Note  sum 
let total = 0;

for(const NotE of Cash){
total = total + NotE.note * NotE.noteqty;
//  totalPrice = total * Product_quantity;
};
    const netCash = (e) =>{
        e.preventDefault();
        const note = e.target.note.value;
        const noteqty = e.target.notevalue.value;
        const NoteAmound = note * noteqty;
        console.log(note, noteqty, NoteAmound ); 
        const newBalance = {note, noteqty, NoteAmound };
        setCash([...Cash, newBalance])
        e.target.reset();
    }
    console.log(Cash);
 
    return (
        <div className='flex mx-auto border-4'>
            <div  
             className='p-2 m-2 border-2 '>
                    <h1 className='text-xl'>Note Balance cost</h1>
                    <form onSubmit={netCash}>
                        <select name='note' class="select select-success  max-w-xs">
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
                    <input name='notevalue'  autoComplete='off'  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
                    <div  class="overflow-x-auto"  style={{'height':'350px'}}>
                        <table class="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Note </th>
                            <th>Note Qty</th>
                            <th>Note Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Cash.map((r,q) => (
                                    <tr>
                                    <th>{q + 1}</th>
                                    <td>{r.note} ৳</td>
                                    <td>{r.noteqty} ৳</td>
                                    <td>{r.NoteAmound} ৳</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot className=''>
                            <tr>
                            <th></th>
                            <th>NOTE</th>
                            <th>Total Value</th>
                            <th className='text-xl'>{total}</th>
                            <th></th>
                            </tr>
                        </tfoot>
                        </table>
                        </div>
            </div>
            <div  className='p-2 m-2 border-2'>
            <h1>Daily Cost</h1>
            <form onSubmit={netCash}>
                        <select name='note' class="select select-success  max-w-xs">
                        <option disabled selected name='notevalue'>Cost type</option >
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
                    <input name='notevalue'  autoComplete='off'  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>            
 
            </div>
            <div  className='p-2 m-2 border-2'>
            <h1>Note Balance cost</h1>
            <form onSubmit={netCash}>
                        <select name='note' class="select select-success  max-w-xs">
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
                    <input name='notevalue'  autoComplete='off'  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>

            </div> 
            
        </div>
    );
};

export default Account;