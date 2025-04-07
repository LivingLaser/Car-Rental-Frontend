/*import { useState } from 'react'
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
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Carousel from './Components/Carousel'

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

         <div className=' bg-slate-500 px-10 py-24  rounded-2xl mx-1 my-1'>
          <Carousel/>
         </div>

         <div className='p-60 bg-teal-600 items-center justify-center rounded-2xl mx-1 my-1'>
          hello
         </div>

         <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
            <Footer/>
         </footer>
         
    </>
    
  )
}

export default App
*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Explore from './Components/Explore';
import Contact from './Components/Contact';
import Rent from './Components/Rent';
import Login from './Components/login';

function AppLayout() {
  return (
    <>
      <Navbar />
      <div className='h-screen relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background />
      </div>

      <div className=' bg-slate-500 p-36 justify-around rounded-lg mx-1 my-1 flex'>
        {/* Could be used for featured cars or something later */}
      </div>

      <div className='p-60 bg-teal-600 items-center justify-center rounded-lg mx-1 my-1'>
        hello
      </div>

      <footer className='bg-gray-800 text-white justify-center rounded-lg mx-1 p-14 my-1'>
        fOOTER
      </footer>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/rent",
    element: <Rent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



