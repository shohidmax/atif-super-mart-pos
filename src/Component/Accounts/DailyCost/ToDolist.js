import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [inputAmount, setInputAmount] = useState('');

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const addTodo = () => {
    if (inputText !== '' && inputAmount !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
        amount: parseFloat(inputAmount),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
      setInputAmount('');
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          class="input input-bordered input-sm w-full max-w-xs"
          type="text"
          value={inputText}
          onChange={handleTextChange}
          placeholder="Expence Name"
        />
        <br/>
        <input
          type="number"
          class="input input-bordered input-sm w-full max-w-xs"
          value={inputAmount}
          onChange={handleAmountChange}
          placeholder="Enter amount ৳"
        />
        <br/>
        <button class="btn btn-sm" onClick={addTodo}> Add TO LIST</button>
      </div>
      <ul>
        {todos.map((todo) => (
         <div>
            <h1>
            {todo.text} - {todo.amound}
            </h1>
             <li key={todo.id}>
            <input
              type="checkbox"
              class="checkbox checkbox-secondary"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span  
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none', 'margin-left': '50px'
              }}
            >
              {todo.text}   -----   TK {todo.amount}
            </span>
            <button className='btn btn-sm btn-danger' style={{'margin-left': '50px'}} onClick={() => deleteTodo(todo.id)}> Delete </button>
          </li>
         </div>
         
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
