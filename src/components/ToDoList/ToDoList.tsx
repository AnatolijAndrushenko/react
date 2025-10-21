
import { ToDo } from '../../models/todo-item'
import './ToDoList.scss'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem" 


export const ToDoList = (props:{todos: ToDo[],updateToDo: Function,deleteToDo:Function }) =>{


const ckerkedList = () =>{
               return props.todos
                .filter((item) => !item.isDone)
                .map((item,idx) => {
                    return(
                        <ToDoListItem  ToDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                    )
                })
}

const unckerkedList = () =>{
               return  props.todos
                .filter((item) => item.isDone)
                .map((item,idx) => {
                    return(
                        <ToDoListItem  ToDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                    )
                })
}

    return (
         <div className="todo-container">
        <ul className="todo-list failed">
            { ckerkedList()}
           {/* <ToDoListItem  ToDoItem={todo1}/> */}
        </ul>
        <ul className="todo-list completed">
           {
              unckerkedList()
            }
     
        </ul>
    </div>
    )
}