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
import DashEmp from './Components/DashEmp';
import DashAdmin from './Components/DashAdmin';
import { ToastContainer } from "react-toastify";
import Rent2 from './Components/Rent2';
import UserProvider from './auth/UserProvider';
import Registration from './Components/Registration';
import Navbar2 from './Components/Navbar2';
import ManageEmployee from './Components/ManageEmployee';
import ManageUser from './Components/ManageUser';
import ManageCar from './Components/ManageCar';
import Navbar3 from './Components/Navbar3';
import Cregemp from './Components/Cregemp';
import Booking from './Components/Booking';
import EmpSignup from './Components/EmpSignup';
import AddCar from './Components/AddCar';


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
  {path: "/booking", element: <><Navbar/><Booking/></>},
  

  {path: "/navbar2", element: <><Navbar2/></>},
  {path: "/dashemp", element: <><Navbar3/><DashEmp/></>},
  {path: "/cregemp", element: <><Navbar3/><Cregemp/></>},
  {path: "/reg", element: <><Navbar3/><Registration/></>},
  {path: "/Empsignup", element: <><Navbar2/><EmpSignup/></>},
  {path: "/dashadmin", element: <><Navbar2/><DashAdmin/></>},
  {path: "/manageemployee", element: <><Navbar2/><ManageEmployee/></>},
  {path: "/manageuser", element: <><Navbar2/><ManageUser/></>},
  {path: "/managecar", element: <><Navbar2/><ManageCar/></>},
  {path: "/AddCar", element: <><Navbar3/><AddCar/></>},
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




