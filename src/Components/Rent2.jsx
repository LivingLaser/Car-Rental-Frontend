import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Rent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

 

  const hourlyPrice = (car.price);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pickupLocation || !dropoffLocation) {
      alert('Please enter both pickup and drop-off locations.');
      return;
    }

    if (!pickupDate || !dropoffDate) {
      alert('Please select both pickup and drop-off dates.');
      return;
    }

    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);

    if (pickup >= dropoff) {
      alert('Drop-off date must be later than pickup date.');
      return;
    }

    const durationInHours = Math.ceil((dropoff - pickup) / (1000 * 60 * 60));
    const calculatedTotalPrice = (durationInHours * hourlyPrice).toFixed(2);

    setTotalPrice(calculatedTotalPrice);
    alert(`Booking confirmed! Total price: ₹${calculatedTotalPrice}`);
  };

  return (
    <div
      className="p-5 bg-gray-100 min-h-screen rounded-2xl mx-1 my-1"
      style={{ backgroundImage: `url(${car.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Rent a Car</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto bg-opacity-30 backdrop-blur-md">
        <img src={car.image} alt={car.name} className="w-full h-70 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <p className="text-lg font-semibold mb-4">Hourly Price: ₹{hourlyPrice}/hour</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Date</label>
              <input
                type="datetime-local"
                className="w-full p-2 border rounded-md"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Date</label>
              <input
                type="datetime-local"
                className="w-full p-2 border rounded-md"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Confirm Booking
          </button>
        </form>
        {totalPrice && (
          <p className="mt-4 text-2xl font-bold text-green-700 text-center border-2 border-blue-700 rounded-xl pt-2 pb-2">
            Total Price: ₹{totalPrice}
          </p>
        )}
      </div>
    </div>
  );
};

export default Rent;