import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Explore from './Components/Explore';
import Contact from './Components/Contact';
import Rent from './Components/Rent';
import Login from './Components/login';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div className='h-screen relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background />
      </div>
      <div className='bg-slate-500 px-10 py-24 rounded-2xl mx-1 my-1'>
        <Carousel />
      </div>
      <div className='p-60 bg-teal-600 items-center justify-center rounded-2xl mx-1 my-1'>
        hello
      </div>
      <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
        <Footer />
      </footer>

      {/* Routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </Router>
  );
}

export default App;




