import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

console.log(location.state);
const Rent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.carDetails;

  if (!car) {
    return (
      <div className="p-10 bg-gray-100 min-h-screen">
        <p className="text-center text-red-500">No car selected. Please go back and select a car.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gray-100 min-h-screen rounded-2xl mx-1 my-1"
    style={{ backgroundImage: `url(${car.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold text-center mb-8">Rent a Car</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto bg-opacity-30 backdrop-blur-md">
        <img src={car.image} alt={car.name} className="w-full h-70 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <p className="text-lg font-semibold mb-4">Price: ₹{car.price}/day</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            
            
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Date</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Date</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rent;