import React from 'react';
import { toast } from 'react-hot-toast';   
import useAddMoney from '../../../Hooks/Accounts_hisab/useAddMoney';

const AddMoney = () => { 
    const [addMoney, setaddMoney] = useAddMoney();
    let total = 0;

    for(const NotE of addMoney){
    total = total + Number(NotE.Amound); 
    };


    const handelDueAmound = (e) => {
        e.preventDefault();
        const Payee_Name = e.target.Payee_Name.value;
        const Amound = e.target.notevalue.value;
       
        const final_Due = { Payee_Name, Amound }; 
        if (final_Due) {
            fetch('http://localhost:3002/addmoney', {
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
          const url = `http://localhost:3002/addmoney/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = addMoney.filter((data) => data._id !== id);
                setaddMoney(remaining);
              }
            });
        }
      };
    return (
        <div>
            
          
          <div>
          <h1 className='text-xl'>ADD Money  </h1>
                    <form onSubmit={handelDueAmound}>
                    <input name='Payee_Name'   required  style={{'width':'250px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="text" placeholder="Name of Cost" />

                    <input name='notevalue'  autoComplete='off' required  style={{'width':'150px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="0.00" /> <button className='btn btn-primary'>+</button>
                    </form>
          </div>
          <div>
          
           
           <div className="overflow-x-auto"  style={{'height':'350px'}}>
          <table className="table w-full overflow-x-auto">
                        <thead>
                            <tr>
                            <th>SN</th>
                            <th>Payee Name </th>
                            <th>Amound</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addMoney.map((r,q) => (
                                    <tr key={q +1}>
                                    <th>{q + 1}</th>
                                    <td>{r.Payee_Name}</td>
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

export default AddMoney;