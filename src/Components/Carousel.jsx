import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                breakpoint: 1435,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 768,
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
            fuelType: 'Petrol',
            capacity: '7',
            bootSpace: '500 L',
            price: (5000/24).toFixed(2),
        },
        {
            id: 2,
            name: 'Hyundai Verna',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna/8703/1736412929424/front-left-side-47.jpg',
            mileage: '10,000 km',
            fuelType: 'Petrol',
            capacity: '5',
            bootSpace: '500 L',
            price: (4000 / 24).toFixed(2), 
        },
        {
            id: 3,
            name: 'Tata Curvv',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg',
            mileage: '10,000 km',
            fuelType: 'Petrol',
            capacity: '5',
            bootSpace: '500 L',
            price: (4500 / 24).toFixed(2), 
        },
        {
            id: 4,
            name: 'Toyota Innova Crysta',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg',
            mileage: '10,000 km',
            fuelType: 'Petrol',
            capacity: '7',
            bootSpace: '500 L',
            price: (6000 / 24).toFixed(2), 
        },
        {
            id: 5,
            name: 'Skoda Kylaq',
            image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg',
            mileage: '19.05 kmpl',
            fuelType: 'Petrol',
            capacity: '5',
            bootSpace: '500 L',
            price: (5500/ 24).toFixed(2), 
        },
        {
            id: 6,
            name: 'Maruti Suzuki Swift',
            image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg",
            mileage: '10,000 km',
            fuelType: 'Diesel',
            capacity: '5',
            bootSpace: '500 L',
            price: (300 / 24).toFixed(2), 
        }
    ];

    return (
        <div className=''>
            <Slider {...settings}>
                {
                    cars.map((car) => (
                        <div key={car.id}>
                            <div className='w-96 h-[550px] p-3 object-cover mx-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-cyan-400'>
                                <img src={car.image} alt={car.name} className='rounded-lg ' />
                                <h2 className='text-center text-2xl'>{car.name}</h2>
                                <h3 className='text-center text-lg'>Mileage : {car.mileage}</h3>
                                <h3 className='text-center text-lg'>Feul Type : {car.fuelType}</h3>
                                <h3 className='text-center text-lg'>Capacity : {car.capacity}</h3>
                                <h3 className='text-center text-lg'>Boot Space : {car.bootSpace}</h3>
                                <h3 className='text-center text-lg'>Price (Hourly): ₹{car.price}</h3>
                                <div className='flex justify-center mt-5'>
                                    <Link to="/rent" state={{ carDetails: car }}>
                                        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center'>
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

export default Carousel;
