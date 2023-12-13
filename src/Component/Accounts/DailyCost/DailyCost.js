import React, { useEffect, useState } from 'react'; 
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
import NextCote from './NextCote';
import useNextCote from '../../../Hooks/Accounts_hisab/useNextCote';
import useRest from '../../../Hooks/Accounts_hisab/useRest'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import swal from 'sweetalert';
import useAccounts from '../../../Hooks/Accounts_hisab/useAccounts';
import { Link } from 'react-router-dom';

const DailyCost = () => { 
    const [lastBalance, setlastBalance] = useState(0);
    const [Close, setClose] = useState(false);
    const [Accounts] = useAccounts();
    useEffect( ()=>{
        fetch('https://atifsupermart.onrender.com/accounts')
        .then(res => res.json())
        .then(data => {
            // filter the last data
            // console.log(data[data.length -1]?.Hisab_Date);

            setlastBalance(data)
        });
    }, [Accounts]);
    const [user] = useAuthState(auth);
    const [Cash, setCash] = useNote();
    const [Todaysale, setTodaysale] = useTodaySale();
    const [Final, setFinal] = useState(0);
    const [Cort] = useNextCote(); 
    const [Rest] = useRest();
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
   
    let totalCort = 0; 
    for(const NotE of Cort){
        totalCort = totalCort + Number(NotE.Amound); 
    };
    let totalNote = 0; 
    for(const NotE of Cash){
        totalNote = totalNote + NotE.note * NotE.noteqty; 
    };
    const [Due1] = useDue();
    let totalDue1 = 0; 
    for(const NotE of Due1){
        totalDue1 = totalDue1 + Number(NotE.Amound); 
    };
    const [bank] = useBank();
    let totalbank = 0;
    for(const NotE of bank){
    totalbank = totalbank + Number(NotE.Amound);
    };
    const [Cost1] = useCost();
    let totalcost = 0;
    for(const NotE of Cost1){
    totalcost = totalcost + Number(NotE.Amound); 
    };
    const [addMoney] = useAddMoney();
    let totaladdMoney = 0;
    for(const NotE of addMoney){
    totaladdMoney = totaladdMoney + Number(NotE.Amound); 
    };
 
    // const [nextOrder, setNextOrder] = useState(0); 

    const finalSum = () =>{

        let finalSUM = 0;
        console.log(Todaysale);
        const AA = lastBalance + Number(Todaysale[0].Amound) + totaladdMoney + Number(Rest[0]?.Amound || 0);
        const BB = totalDue1 + totalcost + totalbank + totalNote;
        const CC = (BB - AA);
        const fgd = setFinal(CC);
        console.log('operation succes',AA,BB , CC, fgd);
        setClose(true);

    };


    const handelFinalData = async() =>{ 
        const str =  user.displayName;
        const words =  str.split(' '); 
        // ----- make  object -------- 
        const Hisab_ID =  `${words[0]}${day}${month + 1}${minutes}${seconds}`;
        const Hisab_Date = new Date().toJSON().slice(0, 10);
        const Hisab_txd = new Date();
        const Preious_amound = lastBalance;
        const Todays_Sales = Todaysale[0]?.Amound;
        const Total_Add_Money = totaladdMoney;
        const Total_Add_Money_list = addMoney;
        const Total_Bank = totalbank;
        const Total_Bank_list = bank;
        const Total_Due = totalDue1;
        const Total_Due_list = Due1;
        const Total_Cost = totalcost;
        const Total_Cost_list = Cost1;
        const Total_Note = totalNote;
        const Total_Note_list = Cash;
        const Total_Cort = totalCort;
        const Total_Cort_list = Cort;
        const Hisab_Rest_Amound = Rest[0]?.Amound || 0; 
        const COMP_AMOUND = Final; 
        const final_Hisab_Data =  {Hisab_ID, Hisab_Date, Hisab_txd,Preious_amound, Todays_Sales, Total_Add_Money, Total_Add_Money_list, Total_Bank, Total_Bank_list, Total_Due, Total_Due_list, Total_Cost, Total_Cost_list, Total_Note, Total_Note_list, Total_Cort, Total_Cort_list, Hisab_Rest_Amound, COMP_AMOUND}; 
        const confirm = window.confirm('Do You want ho hold Your Sales!!') 
        if (confirm) {
          fetch('https://atifsupermart.onrender.com/api/v3/finalsubmit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(final_Hisab_Data) 
        })
        .then(r => r.json())
        .then(data => {
          console.log(data) 
          swal("Product Hold successfully!"); 
          lolona()
          window.location.reload();
        })  
        }
      }


    //   const handleDownloadPdf = (data) =>{ 
    //     console.log("clickef"); 
    //   }
     
    const lolona = () =>{
        const proceed = window.confirm("Are you sure you want to delete all record?");
        if (proceed) {
            fetch('https://atifsupermart.onrender.com/api/delete')
        .then(r => r.json())
        .then(data => {
            console.log(data);
            toast.success('Sucessfully deleted all deta') 
        }) 
        }
        else{
            toast.success('Keep It Carefully')
        }
    }

    const handelTodaySale = (e) => {
        e.preventDefault();
        const Payee_Name = 'today sales';
        const Amound = e.target.todaysaleCollection.value;
        const final_Due = { Payee_Name, Amound }; 
        if (final_Due) {
            fetch('https://atifsupermart.onrender.com/todaysale', {
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
    // todays rest of collection 
    const handleRestAmound = (e) =>{
        e.preventDefault();
        const Name = 'Total rest collection';
        const Amound = e.target.todayrestCollection.value;
        const final_rest = { Name, Amound }; 
        if (final_rest) {
            fetch('https://atifsupermart.onrender.com/todayrestamound', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(final_rest)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Rest added successfully!!!');
                    e.target.reset();
                })
        } 
    };
        // DELET ENGRY
        const handleSALEDelete = (id) => {
            const proceed = window.confirm("Are you sure you want to delete salese amound?");
            if (proceed) {
              const url = `https://atifsupermart.onrender.com/todaysale/${id}`;
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
          const handleRestDelete = (id) => {
            const proceed = window.confirm("Are you sure you want to delete salese amound?");
            if (proceed) {
              const url = `https://atifsupermart.onrender.com/todayrestamound/${id}`;
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

        //   if (!lastBalance) {
        //     return<>
        //     <div className='flex mx-auto'>
        //         <h1 className='text-2xl flex mx-auto text-center'>Data not Loaded Please Reload </h1>
        //         <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"> </svg>
        //     </div>
        //     <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        //     <div class="animate-pulse flex space-x-4">
        //       <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        //       <div class="flex-1 space-y-6 py-1">
        //         <div class="h-2 bg-slate-200 rounded"></div>
        //         <div class="space-y-3">
        //           <div class="grid grid-cols-3 gap-4">
        //             <div class="h-2 bg-slate-200 rounded col-span-2"></div>
        //             <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        //           </div>
        //           <div class="h-2 bg-slate-200 rounded"></div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
            
        //     </>;
        // }
    return (
    <div>
        <div className=' flex mx-auto'>
            <div className=' sm:flex justify-center mx-auto '>
                    <div className=' text-left'> 
                        <div>
                        <div className="stats stats-vertical mx-auto  shadow"> 
                                <div style={{'width':'260px'}} className="stat">
                                    <div className=' text-2xl'>Previous Cash</div>
                                    <div className="stat-value text-green-500">{ !lastBalance[lastBalance.length -1]?.Total_Note ? <span class="loading loading-dots loading-xs"></span> : lastBalance[lastBalance.length -1]?.Total_Note}</div>
                                    <div className="stat-desc">{lastBalance[lastBalance.length -1]?.Hisab_Date}</div>
                                </div> 
                                
                                <div className="stat">
                                    <div  className='tat-title text-2xl'>Today Sales</div>
                                    <div className="stat-value text-green-500 ">{Todaysale[0]?.Amound} {!Todaysale[0]?.Amound ? <span class="loading loading-dots loading-xs"></span> : <button className='btn btn-ghost btn-xs ' onClick={() => handleSALEDelete(Todaysale[0]?._id)}>🗑️</button>}</div>
                                    <div className="stat-desc"> Total Entry ({Todaysale?.length})</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Add Money</div>
                                    <div className="stat-value text-green-500">{totaladdMoney}</div>
                                    <div className="stat-desc">Total Entry ({addMoney?.length})</div>
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
                                    <div className="stat-desc">Total Entry ({bank?.length})</div>
                                </div> 
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Total DUE</div>
                                    <div className="stat-value text-blue-500">{totalDue1}</div>
                                    <div className="stat-desc">Total Entry ({Due1?.length})</div>
                                </div> 
                                <div className="stat">
                                    <div  className='text-red-500 text-2xl'>Daily Cost</div>
                                    <div className="stat-value text-red-500">{totalcost}</div>
                                    <div className="stat-desc">Total Entry ({Cost1.length})</div>
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
                                    <div className="stat-desc">Total Entry ({Cash.length})</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Rest of the collection</div>
                                    <div className="stat-value text-green-500">{Rest[0]?.Amound} {!Rest[0]?.Amound ? <span class="loading loading-dots loading-xs"></span> : <button className='btn btn-ghost btn-xs ' onClick={() => handleRestDelete(Rest[0]?._id)}>🗑️</button>}</div>
                                    <div className="stat-desc">Total Entry ({Rest.length})</div>
                                </div>
                                
                                <div className="stat">
                                    <div  className=' tat-title text-2xl'>Next Day Order</div>
                                    <div className="stat-value">{totalCort}</div>
                                    <div className="stat-desc">{totalCort + '.00'}</div>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div> 
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
        <div className='sm:flex justify-center mx-auto m-2 p-2'>
            <button className='btn btn-primary' onClick={finalSum}> compear</button>
            <h1 className='text text-primary text-3xl p-2 '>{ Final} ৳ {Final >= 0 ? <span>বেশি হয়েছে </span>:<span>কম হয়েছে </span>}</h1>
            {Close == true? <button className='btn btn-primary mx-2' onClick={handelFinalData}> Submit</button> : <button disabled className='btn btn-primary mx-2' > Submit</button>}
             <Link to='/hisabkhata' className='btn btn-info mx-2' > Hisab List</Link> 
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
        <div className='sm:flex justify-center'>

            <div className='p-2 mx-2 mt-2 border-2 rounded border-green-500'>
                <h1>Today sale</h1>
                <form onSubmit={handelTodaySale}>
                <input name='todaysaleCollection'  autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Today Sales" /> {Todaysale[0]?.Amound ? <button className='btn btn-primary' disabled>+</button>:<button  className='btn btn-primary'>+</button>}
                </form>
            </div>
            <div className='p-2 mt-2 mx-2 border-2 rounded border-green-500'>
                <h1>Rest of the collection</h1>
                <form onSubmit={handleRestAmound}>
                <input name='todayrestCollection'  autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Rest of the collection value" />  {Rest[0]?.Amound ? <button className='btn btn-primary' disabled>+</button>:<button  className='btn btn-primary'>+</button>}
                </form>
            </div>

           
            <div>
                <button onClick={lolona} className='btn btn-damger'> Delete all data  </button>
            </div>
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
       
        <div className=' grid grid-cols-1 sm:grid-cols-3 p-2 gap-4  mx-auto'>
            
            <div className='border-4 bg-gray-300'>
                <Cost/>
            </div>
            
            <div  className='border-4 bg-gray-300'>
                <Bankcost/>
            </div>
          
            <div  className='border-4 bg-gray-300'>
                <Note/>
            </div>
            
            <div  className='border-4 bg-gray-300'>
                <Due/>
            </div>
            <div  className='border-4 bg-gray-300'>
                <AddMoney/>
            </div>
            <div  className='border-4 bg-gray-300'>
                <NextCote/>
            </div>
        </div>
    </div>
    );
};

export default DailyCost;


