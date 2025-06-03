import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCarVariant } from "../services/carVariantService";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";

const OwnerReg = () => {
  const navigate = useNavigate();

  const [variantDetail, setVariantDetail] = useState({
    registration: "",
    insuranceValidity: "",
    pucValidity: "",
    modelColor: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setVariantDetail({ ...variantDetail, [id]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    addCarVariant(variantDetail, 0, 0)
      .then((response) => {
        setVariantDetail({
          registration: "",
          insuranceValidity: "",
          pucValidity: "",
          modelColor: "",
        });
        setErrors({});
        toast.success("Car Registration Added");
        navigate("/dashowner");
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f26] rounded-lg mx-1 my-1">
      <div className="w-full max-w-md p-6 bg-[#1c2333] rounded-xl shadow-xl shadow-blue-500 text-white transform -translate-y-10">
        <form className="space-y-6" onSubmit={submitForm}>
          <TextField
            label="Registration" variant="outlined" fullWidth
            id="registration" value={variantDetail.registration} onChange={handleChange}
            error={errors?.response?.data?.registration ? true : false}
            helperText={errors?.response?.data?.registration}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "gray" } }}
            sx={inputStyles}
          />

          <TextField
            label="Insurance Validity" type="date" variant="outlined" fullWidth
            id="insuranceValidity" value={variantDetail.insuranceValidity} onChange={handleChange}
            error={errors?.response?.data?.insuranceValidity ? true : false}
            helperText={errors?.response?.data?.insuranceValidity}
            InputLabelProps={{ shrink: true, style: { color: "gray" } }}
            InputProps={{ style: { color: "white" } }}
            sx={inputStyles}
          />

          <TextField
            label="PUC Validity" type="date" variant="outlined" fullWidth
            id="pucValidity" value={variantDetail.pucValidity} onChange={handleChange}
            error={errors?.response?.data?.pucValidity ? true : false}
            helperText={errors?.response?.data?.pucValidity}
            InputLabelProps={{ shrink: true, style: { color: "gray" } }}
            InputProps={{ style: { color: "white" } }}
            sx={inputStyles}
          />

          <select
            id="modelColor"
            value={variantDetail.modelColor}
            onChange={handleChange}
            className="w-full text-white bg-[#1c2333] p-2 rounded border border-gray-300"
          >
            <option value="" disabled>
              Model Color
            </option>
            <option>Red</option>
            <option>Blue</option>
            <option>Black</option>
            <option>White</option>
            <option>Silver</option>
            <option>Gray</option>
            <option>Yellow</option>
          </select>

          <button
            type="submit"
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
