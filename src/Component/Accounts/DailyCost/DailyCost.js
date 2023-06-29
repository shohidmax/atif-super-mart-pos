import React from 'react'; 
import Note from './Note';
import Bankcost from './Bankcost';
import Cost from './Cost';
import Due from './Due';

const DailyCost = () => {
    let addd = 1;
    const lolona = () =>{
        console.log('deleted');
        fetch('http://localhost:3002/api/delete')
        .then(r => r.json())
        .then(data => console.log(data))
    }
    return (
    <div>
        <div className=''>
            <div className='flex justify-center mx-auto '>
                    <div className=' text-left'> 
                        <div>
                        <div class="stats stats-vertical  shadow"> 
                                <div style={{'width':'260px'}} class="stat">
                                    <div className=' text-2xl'>Previous Cash</div>
                                    <div class="stat-value text-green-500">32000</div>
                                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className=' tat-title text-2xl'>Today Sales</div>
                                    <div class="stat-value text-green-500">12,200</div>
                                    <div class="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className=' tat-title text-2xl'>Add Money</div>
                                    <div class="stat-value text-green-500">1,200</div>
                                    <div class="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                    <div className=' text-left'>
                    <div>
                        <div class="stats stats-vertical shadow"> 
                                <div class="stat"  style={{'width':'260px'}} >
                                    <div  className=' tat-title text-2xl'>Total bank</div>
                                    <div class="stat-value text-blue-500">3100</div>
                                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className=' tat-title text-2xl'>Total DUE</div>
                                    <div class="stat-value text-blue-500">4,200</div>
                                    <div class="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className='text-red-500 text-2xl'>Daily Cost</div>
                                    <div class="stat-value text-red-500">1,200</div>
                                    <div class="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                    <div className='  rounded text-left'> 
                    <div>
                        <div class="stats stats-vertical shadow"> 
                                <div class="stat"  style={{'width':'260px'}} >
                                    <div  className=' tat-title text-2xl'>Today Cash</div>
                                    <div class="stat-value text-green-500">3100</div>
                                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className=' tat-title text-2xl'>Rest of the collection</div>
                                    <div class="stat-value text-green-500">4,200</div>
                                    <div class="stat-desc">↗︎ 400 (22%)</div>
                                </div>
                                
                                <div class="stat">
                                    <div  className=' tat-title text-2xl'>Next Day Order</div>
                                    <div class="stat-value">1,200</div>
                                    <div class="stat-desc">↘︎ 90 (14%)</div>
                                </div> 
                                </div>
                        </div> 
                    </div>
                </div> 
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
        <div className='flex justify-center'>
            <div className='p-2'>
                <form>
                <input name='notevalue'  autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Due Collected Amound" /> {addd == 0? <button className='btn btn-primary'>+</button>:<button disabled className='btn btn-primary'>+</button>}
                </form>
            </div>
            <div className='p-2'>
                <form>
                <input name='notevalue'  autoComplete='off' required  style={{'width':'200px','height':'50px',}} className="text-end input border-2 bg-red-100 " type="number" placeholder="Due Collected Amound" /> <button className='btn btn-primary'>+</button>
                </form>
            </div>
            <div>
                <button onClick={lolona} className='btn btn-primary'> delet </button>
            </div>
        </div>
        <hr className='border-2 border-red m-3' style={{'color':'red', 'weight':'30px', 'margin':'5px,5px'}}/> 
       
        <div className=' flex  mx-auto justify-around'>
            
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
        </div>
    </div>
    );
};

export default DailyCost;


