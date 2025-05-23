import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import Carousel from './Carousel';
import Footer from './Footer';
import Rating from './Rating';
import Rent from './Rent';
import Profile from './Profile';
import Maps from './Maps';


function Home() {

  


  return (
    <div>
      <div className='h-screen relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background />
      </div>
      <div className='bg-slate-500 px-10 py-24 rounded-2xl mx-1 my-1'>
        <Carousel />
      </div>
      <div className='p-10 bg-cyan-400 items-center justify-center rounded-2xl mx-1 my-1'>
        <div className=' my-2 mx-0 text-center text-xl font-bold border-4 border-pink-500 rounded-2xl py-2'>Search Your Nearby Cars............</div>
        <Maps/>
      </div>
      <div className='p-32 bg-purple-800 items-center justify-center rounded-2xl mx-1 my-1'>
        <Rating/>
      </div>
      <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
