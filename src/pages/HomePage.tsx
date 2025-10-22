import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"
interface ComponentProps{
    todos: ToDo[]
}
export const HomePage = (props: ComponentProps) =>{
  return(
<div className='container'>{
props.todos.map((todo: ToDo,idx: number) =>{
return (<ListItem todo={todo} key={idx}/>)
})
}
</div>
  )
}