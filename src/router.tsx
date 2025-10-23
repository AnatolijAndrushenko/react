import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/layout";
import { NotFound } from "./pages/404";
import { ViewList} from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescription";



export const router = createBrowserRouter([
     {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children:[
    {path: '/',element :<ToDoListPage/>},
      { path: '/list', element: <ViewList />},
   {path: '/list/:id',element: <ItemDescription/>}
  ]
},{
    path: '*',
    element: <NotFound/>
  }
])