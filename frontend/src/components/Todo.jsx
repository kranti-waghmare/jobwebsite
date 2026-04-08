import React from 'react'

const Todo = () => {
  return (
    <>

    <div>
        <input type="text"
        placeholder='Enter your todo list'
        className='border py-2 p-4'
        
        />

        <button className='border p-4 px-4 py-2'>Add</button>
    </div>

    </>
  )
}

export default Todo