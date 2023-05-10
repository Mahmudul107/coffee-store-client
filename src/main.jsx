/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './Component/AddCoffee.jsx'
import UpdateCoffee from './Component/UpdateCoffee.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffee',
    element: <AddCoffee/>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)