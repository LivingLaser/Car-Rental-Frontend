import { TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CAR_IMAGE_RESOURCE } from '../services/carService';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsSuitcase } from "react-icons/bs";
import { toast } from 'react-toastify';
import { userBooking } from '../services/bookingService';
import userContext from '../auth/userContext';

const Rent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  const userData = useContext(userContext);
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 365);

  const [bookingDetail, setBookingDetail] = useState({
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
    amount: ""
  });

  const [errors, setErrors] = useState({});

  const formatDate = (date) => {
    const pad = (n) => (n < 10 ? '0' + n : n);
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

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


  const hourlyPrice = (car.rentPrice);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBookingDetail({ ...bookingDetail, [id]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const pickup = new Date(bookingDetail.pickDate);
    const dropoff = new Date(bookingDetail.dropDate);

    if (pickup >= dropoff) {
      toast.error("Drop-off date must be later than Pickup date");
      return;
    }

    const durationInHours = Math.ceil((dropoff - pickup) / (1000 * 60 * 60));
    const totalPrice = (durationInHours * hourlyPrice).toFixed(2);
    setBookingDetail({ ...bookingDetail, "amount": totalPrice });

    userBooking(bookingDetail, userData.user.userId, car.modelId).then((response) => {
      setBookingDetail({
        pickLocation: "",
        dropLocation: "",
        pickDate: "",
        dropDate: "",
        amount: ""
      });
      setErrors({});
      toast.success("Booking initiated...");
      navigate("/booking");
    }).catch((error) => {
      setErrors(error);
    });
  };

  return (
    <div
      className="p-5 bg-gray-100 min-h-screen rounded-2xl mx-1 my-1"
      style={{ backgroundImage: `url(${CAR_IMAGE_RESOURCE + car.modelImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-stroke-2">Rent a Car</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto bg-opacity-30 backdrop-blur-md">
        <img src={CAR_IMAGE_RESOURCE + car.modelImage} alt={car.modelName} className="w-full h-70 object-cover rounded-md mb-4" />
        <h2 className="text-2xl text-center font-bold mb-2">Model : {car.modelName}</h2>

        <div className="flex justify-around gap-4 mb-6 items-center">
          <div className="flex items-center p-1">
            <BsFillFuelPumpFill className="text-2xl text-blue-500 mr-2" />
            <p className="text-black font-semibold">Fuel: {car.fuelType}</p>
          </div>
          <div className="flex items-center p-1">
            <IoSpeedometer className="text-2xl text-blue-500 mr-2" />
            <p className="text-black font-semibold">Mileage: {car.mileage}</p>
          </div>
          <div className="flex items-center p-1">
            <MdOutlineAirlineSeatReclineExtra className="text-2xl text-blue-500 mr-2" />
            <p className="text-black font-semibold">Seat Capacity: {car.seatCapacity}</p>
          </div>
          <div className="flex items-center p-1">
            <BsSuitcase className="text-2xl text-blue-500 mr-2" />
            <p className="text-black font-semibold">Boot Space: {car.bootSpace}</p>
          </div>
        </div>

        <p className="text-lg font-semibold text-center  mb-4">Hourly Price: ₹{hourlyPrice}/hour</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <TextField
                type="text" className="w-full p-2 border rounded-md"
                id="pickLocation" value={bookingDetail.pickLocation} onChange={handleChange}
                error={errors?.response?.data?.pickLocation ? true : false}
                helperText={errors?.response?.data?.pickLocation}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Location</label>
              <TextField
                type="text" className="w-full p-2 border rounded-md"
                id="dropLocation" value={bookingDetail.dropLocation} onChange={handleChange}
                error={errors?.response?.data?.dropLocation ? true : false}
                helperText={errors?.response?.data?.dropLocation}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pickup Date</label>
              <TextField
                type="datetime-local" className="w-full p-2 border rounded-md"
                id="pickDate" value={bookingDetail.pickDate} onChange={handleChange}
                error={errors?.response?.data?.pickDate ? true : false}
                helperText={errors?.response?.data?.pickDate}
                InputProps={{ inputProps: { min: formatDate(minDate), max: formatDate(maxDate) } }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Drop-off Date</label>
              <TextField
                type="datetime-local" className="w-full p-2 border rounded-md"
                id="dropDate" value={bookingDetail.dropDate} onChange={handleChange}
                error={errors?.response?.data?.dropDate ? true : false}
                helperText={errors?.response?.data?.dropDate}
                InputProps={{ inputProps: { min: formatDate(minDate), max: formatDate(maxDate) } }}
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
        {/*totalPrice && (
          <p className="mt-4 text-2xl font-bold text-stroke-3 text-center border-2 border-blue-700 rounded-xl pt-2 pb-2">
            Total Price: ₹{totalPrice}
          </p>
        )*/}
      </div>
    </div>
  );
};

export default Rent;