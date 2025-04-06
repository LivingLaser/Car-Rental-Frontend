import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Components/Background'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Explore from './Components/Explore'
import Contact from './Components/Contact'
import Rent from './Components/Rent'
import Login from './Components/login'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,

    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/explore",
      element: <Explore/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/rent",
      element: <Rent/>,
    }, 
    {
      path: "/login",
      element: <Login/>,
    }, 
  ])

  return (
    
    <>
    
      <div>
        <Navbar/>
      </div>
        <div className='h-screen  relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background/>
         </div>

         <div className=' bg-slate-500 p-36 justify-around rounded-lg mx-1 my-1 flex'>
          
         </div>

         <div className='p-60 bg-teal-600 items-center justify-center rounded-lg mx-1 my-1'>
          hello
         </div>

         <footer className='bg-gray-800 text-white justify-center rounded-lg mx-1 p-14 my-1'>
            fOOTER
         </footer>
         
    </>
    
  )
}

export default App
