import React from 'react';
import CostToDo from './CostToDo';
import TodoList from './ToDolist';

const DailyCost = () => {
    return (
        <div>
            <div className='fixed absolute top flex'>
                <div className='grid justify-items-between'> 
                    <h2>previous cash : 400 tk</h2>
                    <h2>total cost : 4500 tk </h2>
                    <h2>total due : 554 tk </h2>
                </div>
                <div className='grid justify-items-center'>
                    <h2> current cash  amound : 45 tk</h2>
                    <h2>bank amound : 455 tk</h2>
                    <h2>bkas : 655 tk</h2>
                    
                </div>
                <div className='grid justify-items-center'> 
                    <h2>bangladesh</h2>
                    <h2>bangladesh</h2>
                    <h2>bangladesh</h2>
                </div>
            </div>
      <hr className='border-2 border-red' style={{'color':'white', 'weight':'30px', 'margin':'5px,5px'}}/> 

            <CostToDo/>
            <TodoList/>
            

        </div>
    );
};

export default DailyCost;


{/* <div className=' m-2 p-2 border-4 border-red-400'>
                BOTTTOM
            </div> */}