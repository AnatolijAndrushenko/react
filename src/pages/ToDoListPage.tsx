import { Header } from "../components/Header/Header"
import {Form} from "../components/Form/Form"
import {ToDoList} from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"
export const ToDoListPage = () =>{

    const [todos,setTodos] = useState<ToDo[]>([ ])


   const createNewToDo = (text: string)=>{
const newToDo: ToDo = {
    id: todos.length,
    text: text,
    isDone: false
}
setTodos([...todos,newToDo])
   }

   const updateToDo = (ToDoItem: ToDo) =>{
 const newTodos = todos.map((todo) =>{
    if(todo.id === ToDoItem.id){
        todo.isDone = !todo.isDone
    }
    return todo
 })
 setTodos(newTodos)
   }

    const deleteToDo = (ToDoItem: ToDo) =>{
    const newTodos = todos.filter((todo) => todo.id !== ToDoItem.id)
    }

   
    return (
        <>
<Header/>
<Form createNewToDo={createNewToDo}/>
<ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        
        </>
    );
}