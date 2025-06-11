import React from 'react';
import Background from './Background';
import Carousel from './Carousel';
import Footer from './Footer';
import Rating from './Rating';
import Maps from './Maps';

function Home() {
  return (
    <div>
      <div className='h-screen relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background />
      </div>
      <div className='bg-slate-600 px-10 py-24 rounded-2xl mx-1 my-1 glass-effect'>
        <Carousel />
      </div>
      <div className='p-10 bg-gray-500 items-center justify-center rounded-2xl mx-1 my-1 glass-effect'>
        <div className=' my-2 mx-0 text-center text-xl font-bold border-4 border-pink-500 rounded-2xl py-2 '>Search Your Nearby Cars............</div>
        <Maps/>
      </div>
      <div className='p-32 bg-neutral-500 items-center justify-center rounded-2xl mx-1 my-1 glass-effect'>
        <Rating/>
      </div>
      <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
