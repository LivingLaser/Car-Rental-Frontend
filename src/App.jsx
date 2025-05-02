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
import Rent2 from './Components/Rent2';
import UserProvider from './auth/UserProvider';

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
  {path: "/rent2", element: <><Navbar/><Rent2/></>},
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" theme="dark" />
    </UserProvider>
  );
}

export default App;




