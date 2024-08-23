import ToDo from './ToDo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'


function ToDoList() {
  const { todos }=useSelector((state:RootState)=>state.todo)

  return (
    <div style={{ width: "100%", marginTop: "50px"}}>
      {
        todos && todos.map((todo:TodoType)=>(
          <ToDo key={todo.id} todoProps={todo}/>
        ))
    }
    </div>
    
  )
}

export default ToDoList