import React from 'react';
import Background from './Background';
import Carousel from './Carousel';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <div className='h-screen relative overflow-hidden my-1 mx-1 rounded-2xl'>
        <Background />
      </div>
      <div className='bg-slate-500 px-10 py-24 rounded-2xl mx-1 my-1'>
        <Carousel />
      </div>
      <div className='p-60 bg-teal-600 items-center justify-center rounded-2xl mx-1 my-1'>
        {/* Additional content can go here */}
      </div>
      <footer className='bg-gray-800 text-white justify-center rounded-2xl mx-1 p-14 my-1'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
