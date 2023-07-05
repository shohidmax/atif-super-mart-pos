import React, { useState } from 'react'; 
import Note from './Note';
import Bankcost from './Bankcost';
import Cost from './Cost';
import Due from './Due';
import useNote from '../../../Hooks/Accounts_hisab/useNote';
import useDue from '../../../Hooks/Accounts_hisab/useDue';
import useBank from '../../../Hooks/Accounts_hisab/useBank';
import useCost from '../../../Hooks/Accounts_hisab/useCost';
import AddMoney from './AddMoney';
import useAddMoney from '../../../Hooks/Accounts_hisab/useAddMoney';
import { toast } from 'react-hot-toast';    
import useTodaySale from '../../../Hooks/Accounts_hisab/useTodaySale';

const DailyCost = () => {
    const [Cash, setCash] = useNote();
    const [Todaysale, setTodaysale] = useTodaySale();
    const [Final, setFinal] = useState(0);


    let totalNote = 0; 
    for(const NotE of Cash){
        totalNote = totalNote + NotE.note * NotE.noteqty; 
    };
    const [Due1, setDue1] = useDue();
    let totalDue1 = 0; 
    for(const NotE of Due1){
        totalDue1 = totalDue1 + Number(NotE.Amound); 
    };
    const [bank, setbank] = useBank();
    let totalbank = 0;
    for(const NotE of bank){
    totalbank = totalbank + Number(NotE.Amound);
    };
    const [Cost1, setCost1] = useCost();
    let totalcost = 0;
    for(const NotE of Cost1){
    totalcost = totalcost + Number(NotE.Amound); 
    };
    const [addMoney, setaddMoney] = useAddMoney();
    let totaladdMoney = 0;
    for(const NotE of addMoney){
    totaladdMoney = totaladdMoney + Number(NotE.Amound); 
    };

 
    const [addd, setaddd] = useState(0); 
    const [nextOrder, setNextOrder] = useState(0);  
    const finalSum = () =>{
        let finalSUM = 0;
        console.log(Todaysale);
        const AA = lastBalance + Number(Todaysale[0].Amound) + totaladdMoney;
        const BB = totalDue1 + totalcost + totalbank ;
        const CC = setFinal(AA - BB);
        console.log('operation succes',AA,BB);

    };
    const lolona = () =>{
        fetch('http://localhost:3002/api/delete')
        .then(r => r.json())
        .then(data => console.log(data))
        console.log('deleted');
    }

    const handelTodaySale = (e) => {
        e.preventDefault();
        const Payee_Name = 'today sales';
        const Amound = e.target.todaysaleCollection.value;
        const final_Due = { Payee_Name, Amound }; 
        if (final_Due) {
            fetch('http://localhost:3002/todaysale', {
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
        const handleSALEDelete = (id) => {
            const proceed = window.confirm("Are you sure you want to delete salese amound?");
            if (proceed) {
              const url = `http://localhost:3002/todaysale/${id}`;
              fetch(url, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                   console.log('deleted sale data'); 
                  }
                });
            }
          };

          let lastBalance = 12630;
    return (
    <div>
        <div className=''>
            <div className='flex justify-center mx-auto '>
                    <div className=' text-left'> 
                        <div>
                        <div className="stats stats-vertical  shadow"> 
                                <div style={{'width':'260px'}} className="stat">
                                    <div className=' text-2xl'>Previous Cash</div>
                                    <div className="stat-value text-green-500">{lastBalance}</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className='tat-title text-2xl'>Today Sales</div>
                                    <div className="stat-value text-green-500 ">{Todaysale[0]?.Amound} <span class="loading loading-dots loading-xs"></span> <button className='btn btn-ghost btn-xs ' onClick={() => handleSALEDelete(Todaysale[0]?._id)}>🗑️</button></div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Add Money</div>
                                    <div className="stat-value text-green-500">{totaladdMoney}</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                    <div className=' text-left'>
                    <div>
                        <div className="stats stats-vertical shadow"> 
                                <div className="stat"  style={{'width':'260px'}} >
                                    <div  className=' tat-title text-2xl'>Total bank</div>
                                    <div className="stat-value text-blue-500">{totalbank}</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Total DUE</div>
                                    <div className="stat-value text-blue-500">{totalDue1}</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className='text-red-500 text-2xl'>Daily Cost</div>
                                    <div className="stat-value text-red-500">{totalcost}</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                    <div className='  rounded text-left'> 
                    <div>
                        <div className="stats stats-vertical shadow"> 
                                <div className="stat"  style={{'width':'260px'}} >
                                    <div  className=' tat-title text-2xl'>Today Cash</div>
                                    <div className="stat-value text-green-500">{totalNote}</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Rest of the collection</div>
                                    <div className="stat-value text-green-500">4,200</div>
                                    <div className="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Next Day Order</div>
                                    <div className="stat-value">{nextOrder}</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                </div> 
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
        <div className='flex justify-center mx-auto m-2 p-2'>
            <h1 className='text text-primary text-3xl p-2 '>{Final}</h1>
            <button className='btn btn-primary' onClick={finalSum}> compear</button>
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
        <div className='flex justify-center'>

            <div className='p-2 border-2 rounded border-green-500'>
                <h1>Today sale</h1>
                <form onSubmit={handelTodaySale}>
                <input name='todaysaleCollection'  autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Today Sales" /> {Todaysale[0]?.Amound ? <button className='btn btn-primary' disabled>+</button>:<button  className='btn btn-primary'>+</button>}
                </form>
            </div>
            <div className='p-2 mx-2 border-2 rounded border-green-500'>
                <h1>Next day order</h1>
                <form >
                <input name='todaysaleCollection'  onChange={(e) => { setNextOrder(e.target.value)}} autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Next day order value" /> {nextOrder >= 1? <button className='btn btn-primary'>+</button>:<button disabled className='btn btn-primary'>+</button>}
                </form>
            </div>

           
            <div>
                <button onClick={lolona} className='btn btn-primary'> delet </button>
            </div>
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
       
        <div className=' grid grid-cols-3 p-2 gap-4 '>
            
            <div>
                <Cost/>
            </div>
            
            <div>
                <Bankcost/>
            </div>
          
            <div>
                <Note/>
            </div>
            
            <div>
                <Due/>
            </div>
            <div>
                <AddMoney/>
            </div>
        </div>
    </div>
    );
};

export default DailyCost;


