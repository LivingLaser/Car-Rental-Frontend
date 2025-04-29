import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/userService";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();

  const [signupDetail, setSignupDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const {id, value} = event.target;
    setSignupDetail({...signupDetail, [id]: value});
  }

  const submitForm = (event) => {
    event.preventDefault();
    signupUser(signupDetail).then((response) => {
      setSignupDetail({
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        password: ""
      });
      setErrors({});
      toast.success("Account created successfully...");
      navigate("/login");
    }).catch((error) => {
      setErrors(error);
    });
  }

  return (
    <div className="relative h-screen overflow-hidden rounded-2xl mx-1 my-1">
      {/* ✅ Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Signup.mp4"
      />

      {/* ✅ Form container */}
      <div className="relative z-10 h-full flex items-center justify-end pr-20">
        <div className="bg-black bg-opacity-70 p-8 rounded-xl w-full max-w-md shadow-lg text-white">
          <h2 className="text-xl font-bold text-center mb-6 text-orange-400">
            Create an Account
          </h2>

          <Box component="form" onSubmit={submitForm}>
          <div className="mb-4">
            <TextField
              label="Full Name"
              variant="filled"
              fullWidth
              id="name" value={signupDetail.name} onChange={handleChange}
              error={errors?.response?.data?.name ? true : false}
              helperText={errors?.response?.data?.name}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              id="email" value={signupDetail.email} onChange={handleChange}
              error={errors?.response?.data?.email ? true : false}
              helperText={errors?.response?.data?.email}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Phone Number"
              type="tel"
              variant="filled"
              fullWidth
              id="phone" value={signupDetail.phone} onChange={handleChange}
              error={errors?.response?.data?.phone ? true : false}
              helperText={errors?.response?.data?.phone}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Address"
              variant="filled"
              fullWidth multiline rows={2}
              id="address" value={signupDetail.address} onChange={handleChange}
              error={errors?.response?.data?.address ? true : false}
              helperText={errors?.response?.data?.address}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Pincode"
              variant="filled"
              fullWidth
              id="pincode" value={signupDetail.pincode} onChange={handleChange}
              error={errors?.response?.data?.pincode ? true : false}
              helperText={errors?.response?.data?.pincode}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              id="password" value={signupDetail.password} onChange={handleChange}
              error={errors?.response?.data?.password ? true : false}
              helperText={errors?.response?.data?.password}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <Button type="submit" variant="contained" color="warning" fullWidth className="mb-4">
            Sign Up
          </Button>
          </Box>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-orange-400 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
}
