import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoByID, updateTodoById } from '../redux/todoSlice';


interface ToDoProps{
    todoProps:TodoType
}

function ToDo({todoProps}:ToDoProps) {

    const {id,content}=todoProps
    const dispatch=useDispatch()
    const[editable,setEditable]=useState<boolean>(false)
    const [newTodo,setNewTodo]=useState<string>(content)
    const handleRemoveTodo = ()=>{
        dispatch(removeTodoByID(id))
    }

    const handleUpdateTodo = ()=>{
        const payload:TodoType ={
            id:id,
            content:newTodo
        }

        dispatch(updateTodoById(payload))
        setEditable(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleUpdateTodo();
        }
    }

    return (
        <div className='todo'>
            {editable ? <input type="text"
            style={{border:"none",outline:"none",width:"380px",fontSize:"20px"}}
            value={newTodo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown}/>:<div>{content}</div>}
            <div>
                <MdDelete onClick={handleRemoveTodo} className='icons'/>
                {editable ? <FaCheck onClick={handleUpdateTodo} className='icons' /> : <AiFillEdit onClick={()=>setEditable(true)} className='icons' />}
                
            </div>
           
        </div>
    )
}

export default ToDo