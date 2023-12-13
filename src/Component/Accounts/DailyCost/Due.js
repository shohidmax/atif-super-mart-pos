import React from 'react';
import { toast } from 'react-hot-toast'; 
import useDue from '../../../Hooks/Accounts_hisab/useDue';

const Due = () => { 
    const [Due, setDue] = useDue();
    let total = 0;

    for(const NotE of Due){
    total = total + Number(NotE.Amound); 
    };


    const handelDueAmound = (e) => {
        e.preventDefault();
        const Due_Name = e.target.Cost_name.value;
        const Amound = e.target.notevalue.value;
       
        const final_Due = { Due_Name, Amound };
        console.log(final_Due);
        if (final_Due) {
            fetch('https://atifsupermart.onrender.com/due', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(final_Due)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Due added successfully!!!');
                    e.target.reset();
                })
  
        }
    };

    // DELET ENGRY
    const handleDueDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://atifsupermart.onrender.com/due/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = Due.filter((data) => data._id !== id);
                setDue(remaining);
              }
            });
        }
      };
    return (
        <div>
            
          
          <div>
          <h1 className='text-xl'>Due list  </h1>
                    <form onSubmit={handelDueAmound}>
                    <input name='Cost_name'   required    className="text-end input border-2 bg-red-100 sm:w-[250px] w-[200px] h-[50px] " type="text" placeholder="Name of Cost" />

                    <input name='notevalue'  autoComplete='off' required    className="text-end input border-2 bg-red-100 sm:w-[150px] w-[120px] h-[50px] " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
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
                                Due.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Due_Name}</td>
                                    <td>{r.Amound} ৳ </td> 
                                    <td><button className='btn btn-xs' onClick={() => handleDueDelete(r._id)}>x</button></td>
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

export default Due;