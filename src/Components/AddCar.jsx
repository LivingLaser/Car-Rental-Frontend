import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addCarModel } from "../services/carService";
import { toast } from "react-toastify";

const AddCar = () => {
  const [imagePreview, setImagePreview] = useState(null);  
  const navigate = useNavigate();

  const [carDetail, setCarDetail] = useState({
    modelName: "",
    mileage: "",
    engine: "",
    transmission: "",
    seatCapacity: "",
    bootSpace: "",
    fuelType: "",
    fuelCapacity: "",
    fuelUnit: "",
    rentPrice: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const {id, value} = event.target;
    setCarDetail({...carDetail, [id]: value});
  }

  const submitForm = (event) => {
    event.preventDefault();
    addCarModel(carDetail).then((response) => {
      setCarDetail({
        modelName: "",
        mileage: "",
        engine: "",
        transmission: "",
        seatCapacity: "",
        bootSpace: "",
        fuelType: "",
        fuelCapacity: "",
        fuelUnit: "",
        rentPrice: ""
      });
      setErrors({});
      toast.success("Car Model Added");
      navigate("/dashadmin");
    }).catch((error) => {
      setErrors(error);
    });
  }


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  
  };


  const handleAddCar = () => {
    navigate('/cregemp');
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f26] rounded-lg mx-1 my-1">
    <div className="w-full max-w-2xl p-6 bg-[#1c2333] rounded-xl p-6 shadow-xl shadow-blue-500 text-white transform -translate-y-10">
      

      <form className="space-y-6">
        {/* Car Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Model Name" className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" />
          <input type="text" placeholder="Mileage"  className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" />
          <input type="text" placeholder="Engine (CC)"  className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" />
          
          <select className="text-white bg-[#1c2333] p-2 rounded border border-gray-300">
            <option>Transmission</option>
            <option>Automatic</option>
            <option>Manual</option>
            <option>Electric</option>
          </select>
          <select  className="text-white bg-[#1c2333] p-2 rounded border border-gray-300">
            <option>Seat Capacity</option>
            {[...Array(8)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>
          <input type="text" placeholder="Boot Space"  className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" />
        </div>

        {/* Fuel Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="text-white bg-[#1c2333] p-2 rounded border border-gray-300">
            <option>Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
          </select>
          <input type="text" placeholder="Fuel Capacity"  className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" />
          <select className="text-white bg-[#1c2333] p-2 rounded border border-gray-300">
            <option>Fuel Unit</option>
            <option>L</option>
            <option>KWH</option>
          </select>
        </div>

        {/* Pricing */}
        <input type="text" placeholder="Rent Price"  className="w-full p-2 mb-4 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400"/>

        {/* Image Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Model Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="mt-4 w-48 h-32 object-cover" />
          )}
        </div>

        {/* Submit */}
        <button 
        type="button"
        onClick={handleAddCar}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Car
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddCar;
