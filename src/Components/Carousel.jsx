import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import Explore from './Explore';
import { Link } from 'react-router-dom';


const Carousel = () => {

    const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
    };
    const cars = [
        {
            id: 1,
            name: 'Bugatti Bolide',
            image: 'https://www.sixt.com/magazine/wp-content/uploads//sites/6/2022/04/Bugatti-Bolide-Hypercar-resize-1024x683.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
            
        },
        {
            id: 2,
            name: 'McLaren 570S',
            image: 'https://www.ilusso.com/imagetag/2442/main/l/Used-2016-McLaren-570S-1698704176.jpg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 3,
            name: 'Lamborghini Huracan',
            image: 'https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-huracan-sterrato-135-66844c67d8d43.jpg?crop=0.620xw:0.522xh;0.146xw,0.251xh&resize=2048:*',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 4,
            name: 'volkswagen vento',
            image: 'https://i.insider.com/625eeebc4f524b00194d3654?width=1136&format=jpeg',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 5,
            name: 'Toyota Fortuner',
            image: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=80',
            mileage: '10,000 km',
            availability: 'Available',
            fuelType: 'Petrol',
            transmission: 'Automatic',
            rating: 4.8,
            description: 'A high-performance sports car .',
        },
        {
            id: 6,
            name: 'Bentley Mulliner Batur',
            image: "https://www.motortrend.com/uploads/2022/08/Bentley-Mulliner-Batur-coupe-3.jpg?w=768&width=768&q=75&format=webp",
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
                        
                        <div className='flex justify-center mt-5'>
                            <Link to="/explore">
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

export default Carousel
