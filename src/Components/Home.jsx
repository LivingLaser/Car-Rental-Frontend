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
        <Maps/>
      </div>
      <div className='p-32 bg-purple-900 items-center justify-center rounded-2xl mx-1 my-1'>
        <Rating/>
      </div>
      <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
