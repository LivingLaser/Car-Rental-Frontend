import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { addCarModel, uploadImageProd } from "../services/carService";
import { toast } from "react-toastify";

const AddCar = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
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
    const { id, value } = event.target;
    setCarDetail({ ...carDetail, [id]: value });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setCarDetail({ ...carDetail, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImage(file);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    addCarModel(carDetail).then((response) => {
      uploadImageProd(response.modelId, image).then((response) => {
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
        toast.error("Something went wrong!");
      })
    }).catch((error) => {
      setErrors(error);
    });
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
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f26] rounded-lg my-1 mx-1 pt-20 overflow-y-auto">
      <div className="w-full max-w-2xl p-6 bg-[#1c2333] rounded-xl shadow-xl shadow-blue-500 text-white transform -translate-y-10">
        <form className="space-y-6" onSubmit={submitForm}>
          {/* Car Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Model Name" fullWidth
              id="modelName" value={carDetail.modelName} onChange={handleChange}
              error={errors?.response?.data?.modelName ? true : false}
              helperText={errors?.response?.data?.modelName}
              sx={inputStyles}
            />
            <TextField
              label="Mileage" fullWidth
              id="mileage" value={carDetail.mileage} onChange={handleChange}
              error={errors?.response?.data?.mileage ? true : false}
              helperText={errors?.response?.data?.mileage}
              sx={inputStyles}
            />
            <TextField
              label="Engine (CC)" fullWidth
              id="engine" value={carDetail.engine} onChange={handleChange}
              error={errors?.response?.data?.engine ? true : false}
              helperText={errors?.response?.data?.engine}
              sx={inputStyles}
            />
            <FormControl fullWidth sx={inputStyles} error={errors?.response?.data?.transmission ? true : false}>
              <InputLabel>Transmission</InputLabel>
              <Select
                label="Transmission" name="transmission"
                value={carDetail.transmission} onChange={handleSelectChange}
              >
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
              <FormHelperText>{errors?.response?.data?.transmission}</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={inputStyles} error={errors?.response?.data?.seatCapacity ? true : false}>
              <InputLabel>Seat Capacity</InputLabel>
              <Select
                label="Seat Capacity" name="seatCapacity"
                value={carDetail.seatCapacity} onChange={handleSelectChange}
              >
                {[...Array(8)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors?.response?.data?.seatCapacity}</FormHelperText>
            </FormControl>
            <TextField
              label="Boot Space" fullWidth
              id="bootSpace" value={carDetail.bootSpace} onChange={handleChange}
              error={errors?.response?.data?.bootSpace ? true : false}
              helperText={errors?.response?.data?.bootSpace}
              sx={inputStyles}
            />
          </div>

          {/* Fuel Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormControl fullWidth sx={inputStyles} error={errors?.response?.data?.fuelType ? true : false}>
              <InputLabel>Fuel Type</InputLabel>
              <Select
                label="Fuel Type" name="fuelType"
                value={carDetail.fuelType} onChange={handleSelectChange}
              >
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
              <FormHelperText>{errors?.response?.data?.fuelType}</FormHelperText>
            </FormControl>
            <TextField
              label="Fuel Capacity" fullWidth
              id="fuelCapacity" value={carDetail.fuelCapacity} onChange={handleChange}
              error={errors?.response?.data?.fuelCapacity ? true : false}
              helperText={errors?.response?.data?.fuelCapacity}
              sx={inputStyles}
            />
            <FormControl fullWidth sx={inputStyles} error={errors?.response?.data?.fuelUnit ? true : false}>
              <InputLabel>Fuel Unit</InputLabel>
              <Select
                label="Fuel Unit" name="fuelUnit"
                value={carDetail.fuelUnit} onChange={handleSelectChange}
              >
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="KWH">KWH</MenuItem>
              </Select>
              <FormHelperText>{errors?.response?.data?.fuelUnit}</FormHelperText>
            </FormControl>
          </div>

          {/* Pricing */}
          <TextField
            label="Rent Price" fullWidth
            id="rentPrice" value={carDetail.rentPrice} onChange={handleChange}
            error={errors?.response?.data?.rentPrice ? true : false}
            helperText={errors?.response?.data?.rentPrice}
            sx={inputStyles}
          />

          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium">Upload Model Image</label>
            <input
              type="file" accept="image/*" required
              id="image" onChange={handleImageChange}
              className="block w-full text-sm text-gray-500"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 w-48 h-32 object-cover" />
            )}
          </div>

          {/* Submit */}
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
