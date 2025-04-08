import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Rating = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  const breakpointsResponsive = {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@1.50': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const handleSwiperEvents = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // Static testimonial data
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      
      desc: 'Great service and reliable cars. Highly recommend!',
      img: 'https://brinytoons.com/testimonial/user.png',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      
      desc: 'Affordable prices and excellent customer support.',
      img: 'https://usercontent.one/wp/salsabuena.co.uk/wp-content/uploads/2023/10/fdamap-testimonial-female-avatar.png?media=1736697073',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      
      desc: 'The car was clean and in great condition. Will rent again!',
      img: 'https://brinytoons.com/testimonial/user.png',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'Bob Brown',
      desc: 'Quick and easy booking process. Very satisfied!',
      img: 'https://usercontent.one/wp/salsabuena.co.uk/wp-content/uploads/2023/10/fdamap-testimonial-female-avatar.png?media=1736697073',
      rating: 4.7,
    },
    {
        id: 5,
        name: 'Charlie Green',
        desc: 'Had a fantastic experience with this rental service.',
        img: 'https://brinytoons.com/testimonial/user.png',
        rating: 4.6,
    },
    {
        id: 6,
        name: 'Diana Prince',
        desc: 'The car was in perfect condition and the staff was friendly.',
        img: 'https://brinytoons.com/testimonial/user.png',
        rating: 4.9,
    },
    {
        id: 7,
        name: 'Ethan Hunt', 
        desc: 'I had a great time driving the car. Highly recommend!',
        img: 'https://brinytoons.com/testimonial/user.png',
        rating: 4.8,
    },
    {
        id: 8,
        name: 'Fiona Apple',
        desc: 'The booking process was smooth and the car was excellent.',
        img: 'https://brinytoons.com/testimonial/user.png',
        rating: 4.7,
    },
    {
        id: 9,
        name: 'George Clooney',
        desc: 'I loved the car I rented. It was a great experience!',
        img: 'https://brinytoons.com/testimonial/user.png',
        rating: 4.6,
    }
  ];

  // Shuffle testimonials
  useEffect(() => {
    const shuffled = [...testimonialData].sort(() => Math.random() - 0.5);
    setShuffledTestimonials(shuffled);
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-600" />
          ))}
        {halfStar && <FaStar className="text-yellow-400" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`empty-${index}`} className="text-neutral-500" />
          ))}
      </>
    );
  };

  return (
    <>
      <div className="h-full w-full space-y-5 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl text-neutral-300 font-semibold">
            Customer Reviews
          </h2>

          <div className="flex items-center gap-6">
            <button
              className={`custom-prev text-neutral-50 bg-blue-600 hover:bg-blue-700 p-2 rounded-full z-10 ${
                isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              disabled={isBeginning}
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <button
              className={`custom-next text-neutral-50 bg-blue-600 hover:bg-blue-700 p-2 rounded-full z-10 ${
                isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              disabled={isEnd}
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="w-full py-2 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={breakpointsResponsive}
            onSlideChange={(swiper) => handleSwiperEvents(swiper)}
            onInit={(swiper) => handleSwiperEvents(swiper)}
            modules={[Navigation]} // Ensure Navigation module is included
            className="mySwiper p-1 ![&_swiper.wrapper] : !ease-in-out ![&_swiper.wrapper] : !duration-300"
          >
            {shuffledTestimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="w-full h-auto p-6 space-y-10 group bg-neutral-800/10 rounded-xl border border-neutral-800/70">
                  <p className="text-neutral-300 text-base font-normal">
                    {item.desc}
                  </p>

                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 object-center object-cover rounded-full border"
                      />

                      <div className="space-y-1">
                        <p className="text-neutral-300 text-base font-semibold">
                          {item.name}
                        </p>
                        
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Rating;
