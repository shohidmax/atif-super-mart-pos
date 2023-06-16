import React from 'react';
import CostToDo from './CostToDo';
import TodoList from './ToDolist';

const DailyCost = () => {
    return (
        <div>
            <CostToDo/>
            <TodoList/>
            <div className=' m-2 p-2 border-4 border-red-400'>
                BOTTTOM
            </div>

        </div>
    );
};

export default DailyCost;