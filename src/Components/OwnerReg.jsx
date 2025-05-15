import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const OwnerReg = () => {
  const [imagePreview, setImagePreview] = useState(null);  
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleAddCar = () => {
    navigate('/dashowner');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f26] rounded-lg mx-1 my-1">
      <div className="w-full max-w-md p-6 bg-[#1c2333] rounded-xl shadow-xl shadow-blue-500 text-white transform -translate-y-10">
        <form className="space-y-6">
          <input 
            type="text" 
            placeholder="Registration" 
            className="w-full p-2 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" 
          />

          <input 
            type="date" 
            placeholder="Insurance Validity" 
            className="w-full p-2 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" 
          />

          <input 
            type="date" 
            placeholder="PUC Validity" 
            className="w-full p-2 border border-gray-300 rounded text-white bg-transparent placeholder-gray-400" 
          />

          <select className="w-full text-white bg-[#1c2333] p-2 rounded border border-gray-300">
            <option>Model Color</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Black</option>
            <option>White</option>
            <option>Silver</option>
            <option>Gray</option>
            <option>Yellow</option>
          </select>

          <button 
            type="button"
            onClick={handleAddCar}
            className="w-full px-6 py-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerReg;
