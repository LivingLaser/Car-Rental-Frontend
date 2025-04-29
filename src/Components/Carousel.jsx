import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Explore from './Explore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Carousel = () => {

    
    const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 1435, // For screens smaller than 1430px
            settings: {
                slidesToShow: 3, // Show 2 slides instead of 3
                centerPadding: "40px", // Adjust padding
            }
        },
        {
            breakpoint: 1024, // For screens smaller than 1024px
            settings: {
                slidesToShow: 1, // Show 1 slide
                centerPadding: "20px", // Adjust padding
            }
        },
        {
            breakpoint: 768, // For screens smaller than 768px
            settings: {
                slidesToShow: 1,
                centerPadding: "10px",
            }
        }
    ]
    };
    const cars = [
        {
            id: 1,
            name: 'Toyota Fortuner',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1690544151440/3d-model-163.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
            price: 1000,
            
        },
        {
            id: 2,
            name: 'Hyundai Verna',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna/8703/1736412929424/front-left-side-47.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 3,
            name: 'Tata Curvv',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 4,
            name: 'Toyota Innova Crysta',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 5,
            name: 'Skoda Kylaq',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg',
            mileage: '19.05 kmpl',
            
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 6,
            name: 'Maruti Suzuki Swift',
            image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg",
            mileage: '........ km',
            availability: '..........',
            fuelType: '........',
            transmission: '........',
            rating: '........',
            description: 'A high-performance sports car .',

        }
    ]
  return (
    <div className=''>
      <Slider {...settings}>
        {
            cars.map((car) => (
                <div key={car.id}>
                    <div className='w-96 h-[550px] p-3 object-cover mx-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300  border-2 border-cyan-400'>
                        <img src={car.image} alt={car.name} className='rounded-lg ' />
                        <h2 className='text-center text-2xl'>{car.name}</h2>
                        <h3 className='text-center text-lg'>Mileage : {car.mileage}</h3>
                        <h3 className='text-center text-lg'>Availability : {car.availability}</h3>
                        <h3 className='text-center text-lg'>Fuel Type : {car.fuelType}</h3>
                        <h3 className='text-center text-lg'>Transmission : {car.transmission}</h3>
                        <h3 className='text-center text-lg'>Rating : {car.rating}</h3>
                        <h3 className='text-center text-lg'>Description : {car.description}</h3>
                        <h3 className='text-center text-lg'>Price : {car.price}</h3>
                        
                        <div className='flex justify-center mt-5'>
                            <Link to="/rent" state={{ carDetails: car }}>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center' onClick={() => handleRentNow(car)}>
                                    Rent Now
                                    <FaArrowAltCircleRight className='ml-2' />
                                </button>
                            </Link>
                        </div>
                        
                    </div>
                    
                    

                    </div>

            ))

        }
      </Slider>

      <div className='flex justify-center mt-5'>
        <Link to="/explore">
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center'>
          Explore
          <FaArrowAltCircleRight className='ml-2' />
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Carousel
