import React from 'react'
import { useState } from 'react';

const Todo = () => {

    const [todo , setTodo] = useState([]);
    const [task , setTask] = useState("")

    const addVal = () => {
          if(task.trim() === "") return;

          setTodo([...todo, {text: task, completed: false}]);
          setTask("")
    }

    const deleteVal = (index) => {
          const newTodo = todo.filter((_, i) => i !== index )
          setTodo(newTodo);
    }

    const clearVal = (index) => {
        const updated = [...todo];
        updated[index].completed = !updated[index].completed;
        setTodo(updated)
    }
  return (
    <>

    <div className='flex justify-center items-center p-2'>
        <input type="text"
        value={task}
       onKeyDown={(e)=>{
   if(e.key === "Enter"){
    addVal()
   }
       }}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter your todo list'
        className='border py-2 p-4'
        
        />

        <button onClick={addVal} className='border p-4 px-4 py-2'>Add</button>
    </div>
<ul>
    
    {todo.map((val, i) => {
    return <li key={i} style={{textDecoration: val.completed ? "line-through" : "none"}}>
       {val.text}

       <button onClick={() => clearVal(i)}>✔</button>
       <button onClick={() => deleteVal(i)}>x</button>
    </li>
   })}

</ul>
   

    </>
  )
}

export default Todo