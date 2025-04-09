import React from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Signup({ onLoginClick }) {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
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

          <div className="mb-4">
            <TextField
              label="Full Name"
              variant="filled"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Phone Number"
              type="tel"
              variant="filled"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Address"
              variant="filled"
              fullWidth
              multiline
              rows={2}
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Pincode"
              type="number"
              variant="filled"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <div className="mb-6">
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>

          <Button variant="contained" color="warning" fullWidth className="mb-4">
            Sign Up
          </Button>

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
