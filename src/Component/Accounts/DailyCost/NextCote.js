import React from 'react';
import { toast } from 'react-hot-toast';  
import useNextCote from '../../../Hooks/Accounts_hisab/useNextCote';

const NextCote = () => { 
    const [Cort, setCort] = useNextCote();
    let total = 0;

    for(const NotE of Cort){
    total = total + Number(NotE.Amound); 
    };


    const handelCortAmound = (e) => {
        e.preventDefault();
        const Cort_Name = e.target.Cost_name.value;
        const Amound = e.target.notevalue.value;
       
        const final_Cort = { Cort_Name, Amound };
        console.log(final_Cort);
        if (final_Cort) {
            fetch('https://atifsupermart.onrender.com/nextcort', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(final_Cort)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Cort added successfully!!!');
                    e.target.reset();
                })
  
        }
    };

    // DELET ENGRY
    const handleCortDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://atifsupermart.onrender.com/nextcort/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = Cort.filter((data) => data._id !== id);
                setCort(remaining);
              }
            });
        }
      };
    return (
        <div> 
          <div>
          <h1 className='text-xl'>Cort list  </h1>
                    <form onSubmit={handelCortAmound}>
                    <input name='Cost_name'   required  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="text" placeholder="Name of Cost" />

                    <input name='notevalue'  autoComplete='off' required  style={{'width':'150px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
          </div>
          <div> 
           <div className="overflow-x-auto"  style={{'height':'350px'}}>
          <table className="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Company Name </th>
                            <th>Amound</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Cort.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Cort_Name}</td>
                                    <td>{r.Amound} ৳ </td> 
                                    <td><button className='btn btn-xs' onClick={() => handleCortDelete(r._id)}>x</button></td>
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

export default NextCote;