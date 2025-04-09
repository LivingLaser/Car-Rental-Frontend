import React from "react";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router-dom";

export default function Login({ onSignupClick }) {
  const navigate = useNavigate();
  return (
    
    <div className="relative h-screen overflow-hidden bg-black">
      {/* ✅ Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/login-bg.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }} // ✅ fade in after login form animation
      />
    
      <motion.div
        initial={{ x: 500, opacity: 0 }}                  
        animate={{ x: 0, opacity: 1 }}                    
        transition={{ duration: 2, type: "spring" }} 
        className="absolute inset-0 z-10 flex items-center justify-center"                     
      >
        
        

        <div className="bg-black bg-opacity-70 p-8 rounded-xl w-full max-w-sm shadow-lg text-white">
          <h2 className="text-xl font-bold text-center mb-4 text-orange-400">
            Login Here
          </h2>
          {/* Add spacing using Tailwind margin-bottom */}
          <div className="mb-4">
            <TextField
              label="Enter Email Here"
              variant="filled"
              fullWidth
              className="mb-4"
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <div className="mb-6">
            <TextField
              label="Enter Password Here"
              type="password"
              variant="filled"
              fullWidth
              className="mb-6" // <-- keep spacing between password and button
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            className="mb-4"
          >
            Login
          </Button>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span
              className="text-orange-400 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>{" "}
            here
          </p>
        </div>
        
      </motion.div>
    </div>
  );
}


