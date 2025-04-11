import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Explore from './Components/Explore';
import Contact from './Components/Contact';
import Rent from './Components/Rent';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { ToastContainer } from "react-toastify";

// Define the routes
const router = createBrowserRouter([
  { path: "/", element: <><Navbar /><Home /></> },
  { path: "/about", element: <><Navbar /><About /></> },
  { path: "/explore", element: <><Navbar /><Explore /></> },
  { path: "/contact", element: <><Navbar /><Contact /></> },
  { path: "/rent", element: <><Navbar /><Rent /></> },
  { path: "/login", element: <><Navbar /><Login /></> },
  { path: "/signup", element: <><Navbar /><Signup /></> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" theme="dark" />
    </>
  );
}

export default App;




