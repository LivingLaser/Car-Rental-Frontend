import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CAR_IMAGE_RESOURCE, getByRandom } from '../services/carService';

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

    const [cars, setCars] = useState(null);

    useEffect(() => {
        getByRandom().then((response) => {
            setCars(response);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className=''>
            <Slider {...settings}>
                {
                    cars.map((car) => (
                        <div key={car.modelId}>
                            <div className='w-96 h-[550px] p-3 object-cover mx-auto rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-cyan-400'>
                                <img src={CAR_IMAGE_RESOURCE + car.modelImage} alt={car.modelName} className='rounded-lg ' />
                                <h2 className='text-center text-2xl'>{car.modelName}</h2>
                                <h3 className='text-center text-lg'>Mileage : {car.mileage}</h3>
                                <h3 className='text-center text-lg'>Feul Type : {car.fuelType}</h3>
                                <h3 className='text-center text-lg'>Fuel Capacity : {car.fuelCapacity} {car.fuelUnit}</h3>
                                <h3 className='text-center text-lg'>Boot Space : {car.bootSpace}</h3>
                                <h3 className='text-center text-lg'>Price (Hourly): ₹{car.rentPrice}</h3>
                                <div className='flex justify-center mt-5'>
                                    <Link to="/rent" state={{ car }}>
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
