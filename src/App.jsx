import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home1 from './Components/Home/Home1'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

let x= createBrowserRouter([
{path:"" ,element:<Layout/> ,children:[
  {index:true , element: <Home1/>},
  {path:"about" ,element: <About/>},
  {path:"portfolio" ,element: <Portfolio/>},
  {path:"contact" ,element: <Contact/>},
  {path:"*" ,element: <div className='mt-72 text-center h-[287px] text-black' >
    <h2 className='text-[50px] font-extrabold'>page not found</h2>
  </div>}
  
] }
])
function App() {

  return (
    <>
    <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
