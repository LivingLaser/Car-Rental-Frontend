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
import Profile from './Components/Profile';
import Admin from './Components/Admin';
import Employee from './Components/Employee';
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
  { path: "/profile", element: <><Navbar /><Profile /></> },
  { path: "/admin", element: <><Navbar /><Admin /></> },
  { path: "/employee", element: <><Navbar/><Employee /></>},
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




