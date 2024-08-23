import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types'


function ToDoCreate() {
    const dispatch=useDispatch()
    
    const[newTodo,setNewTodo]=useState<string>("")

    const handleCreateTodo=()=>{
        if(newTodo.trim().length===0){
            alert("Enter a Todo!")
            return
        }
        const payload:TodoType={
            id:Math.floor(Math.random()*999999),
            content:newTodo
        }

        dispatch(createTodo(payload));
        setNewTodo("");
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCreateTodo()
        }
    }
    return (
        <div className='todo-create'>
            <input placeholder='Enter ToDo'
            className='todo-input'
            value={newTodo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text" />
            <button onClick={handleCreateTodo} className='todo-create-button'>Create Todo</button>
        </div>
    )
}

export default ToDoCreate