
import { useDispatch, useSelector } from "react-redux"
import {Form} from "../components/Form/Form"
import {ToDoList} from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { RootState } from "../store"
import { createAction, DeleteAction, UpdateAction } from "../feature/ToDoList"
export const ToDoListPage = () =>{

    const todoList = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch();
   const createNewToDo = (text: string) => {
    dispatch(createAction(text))

   }

   const updateToDo = (ToDoItem: ToDo) =>{
    dispatch(UpdateAction(ToDoItem))
   }

    const deleteToDo = (ToDoItem: ToDo) =>{
    dispatch(DeleteAction(ToDoItem))
    }

   
    return (
        <>

<Form createNewToDo={createNewToDo}/>
<ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}/>

        </>
    );
}

function state(state: unknown): unknown {
    throw new Error("Function not implemented.")
}
function updateAction(ToDoItem: ToDo): any {
    throw new Error("Function not implemented.")
}

