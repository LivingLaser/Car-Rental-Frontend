import React, { useContext, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/userService";
import { doLogin } from "../auth/authentication";
import userContext from "../auth/userContext";

export default function Login() {
  const navigate = useNavigate();
  const userData = useContext(userContext);
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const {id, value} = event.target;
    setLoginDetail({...loginDetail, [id]: value});
  }

  const submitForm = (event) => {
    event.preventDefault();

    if(loginDetail.email.trim()=="" || loginDetail.password.trim()=="") {
      toast.error("Username and Password is required");
      return;
    }

    loginUser(loginDetail).then((response) => {
      setLoginDetail({
        email: "",
        password: ""
      });
      doLogin(response);
      userData.setUser(response);
      toast.success("Welcome " + response.name);
      navigate("/");
    }).catch((error) => {
      toast.error(error.response.data.message);
    })
  }

  return (
    <div className="relative h-screen overflow-hidden bg-black rounded-2xl mx-1 my-1">
      {/* ✅ Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/login1.jpg')",
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
          <Box component="form" onSubmit={submitForm}>
          <div className="mb-4">
            <TextField
              label="Enter Email Here"
              variant="filled"
              fullWidth
              id="email" value={loginDetail.email} onChange={handleChange}
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
              id="password" value={loginDetail.password} onChange={handleChange}
              className="mb-6" // <-- keep spacing between password and button
              InputProps={{ style: { backgroundColor: "white" } }}
            />
          </div>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            className="mb-4" type="submit"
          >
            Login
          </Button>
          </Box>

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


