import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/layout';

const todos: ToDo[] = [
  {
    id : 0,
    text: 'First action',
    isDone: false,
  },
   {
    id : 1,
    text: 'Second action',
    isDone: true,
  },
   {
    id : 2,
    text: 'Third action',
    isDone: false,
  },
   {
    id :3,
    text: 'Fourth action',
    isDone: true,
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children:[
    {
      path: '/',
      element :<HomePage todos={todos}/>
    },
    {
      path: '/todo',
      element: <ToDoListPage/>
    },
      {
      path: '/list/:id',
      element: <ItemDescription todos={todos}/>
    }
  
  ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
],{basename: '/app/'})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

