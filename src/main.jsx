import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Login from './Login.jsx'
import Register from './Register.jsx'
import AddProduct from './AddProduct.jsx'
import Brand from './Brand.jsx'
import axios from 'axios'
import ProductDetails from './ProductDetails.jsx'
import Private from './Private.jsx'
import ErrorElement from './ErrorElement.jsx'
import Cart from './Cart.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorElement></ErrorElement>,
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
        element:<Private><AddProduct></AddProduct></Private>
      },
      {
        path:"/company/:id",
        element:<Private><Brand></Brand></Private>,
        loader:({params})=>{return axios.get(`https://techtronics.vercel.app/company/${params.id}`).then(res=>res.data)},
      },
      {
        path:"/product/:id",
        element:<Private><AddProduct></AddProduct></Private>,
        loader:({params})=>{return axios.get(`https://techtronics.vercel.app/product/${params.id}`).then(res=>res.data)}
      },
      {
        path:'/productdetails/:id',
        element:<Private>  <ProductDetails></ProductDetails></Private>,
        loader:({params})=>{return fetch(`https://techtronics.vercel.app/product/${params.id}`)}
      },
      {
        path:'/cart',
        element:<Private> <Cart></Cart> </Private>,
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
