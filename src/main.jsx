import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Login from './Login.jsx'
import Register from './Register.jsx'
import AddProduct from './AddProduct.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
     <Outlet></Outlet>
  </React.StrictMode>,
)
