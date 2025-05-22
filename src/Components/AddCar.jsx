import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
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

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCarDetail({ ...carDetail, [id]: value });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setCarDetail({ ...carDetail, [name]: value });
  };

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
      toast.success("Car Model Added");
      navigate("/dashadmin");
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleAddCar = () => {
    navigate('/cregemp');
  };

  const inputStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "& .MuiInputBase-input": {
      color: "white"
    },
    "& .MuiInputLabel-root": {
      color: "#ccc"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f26] rounded-lg mx-1 my-1">
      <div className="w-full max-w-2xl p-6 bg-[#1c2333] rounded-xl shadow-xl shadow-blue-500 text-white transform -translate-y-10">
        <form className="space-y-6" onSubmit={submitForm}>
          {/* Car Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Model Name"
              id="modelName"
              value={carDetail.modelName}
              onChange={handleChange}
              fullWidth
              sx={inputStyles}
            />
            <TextField
              label="Mileage"
              id="mileage"
              value={carDetail.mileage}
              onChange={handleChange}
              fullWidth
              sx={inputStyles}
            />
            <TextField
              label="Engine (CC)"
              id="engine"
              value={carDetail.engine}
              onChange={handleChange}
              fullWidth
              sx={inputStyles}
            />
            <FormControl fullWidth sx={inputStyles}>
              <InputLabel>Transmission</InputLabel>
              <Select
                name="transmission"
                value={carDetail.transmission}
                onChange={handleSelectChange}
                label="Transmission"
              >                
                <MenuItem value="Transmission"disabled>select one</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={inputStyles}>
              <InputLabel>Seat Capacity</InputLabel>
              <Select
                name="seatCapacity"
                value={carDetail.seatCapacity}
                onChange={handleSelectChange}
                label="Seat Capacity"
              >
                {[...Array(8)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Boot Space"
              id="bootSpace"
              value={carDetail.bootSpace}
              onChange={handleChange}
              fullWidth
              sx={inputStyles}
            />
          </div>

          {/* Fuel Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormControl fullWidth sx={inputStyles}>
              <InputLabel>Fuel Type</InputLabel>
              <Select
                name="fuelType"
                value={carDetail.fuelType}
                onChange={handleSelectChange}
                label="Fuel Type"
              >
                <MenuItem value="Transmission"disabled>select one</MenuItem>
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Fuel Capacity"
              id="fuelCapacity"
              value={carDetail.fuelCapacity}
              onChange={handleChange}
              fullWidth
              sx={inputStyles}
            />
            <FormControl fullWidth sx={inputStyles}>
              <InputLabel>Fuel Unit</InputLabel>
              <Select
                name="fuelUnit"
                value={carDetail.fuelUnit}
                onChange={handleSelectChange}
                label="Fuel Unit"
              >
                <MenuItem value="Transmission"disabled>select one</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="KWH">KWH</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* Pricing */}
          <TextField
            label="Rent Price"
            id="rentPrice"
            value={carDetail.rentPrice}
            onChange={handleChange}
            fullWidth
            sx={inputStyles}
          />

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
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
