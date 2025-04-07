/*// src/LoginForm.jsx
import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Login({onSignupClick}) {
  return (
    <div className="w-full max-w-lg bg-gray-800 shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center">LOGIN</h2>
      <p className="text-gray-400 text-sm mb-6 text-center">
        Enter your credentials to access your account.
      </p>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        className="mb-4 bg-white rounded"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        className="mb-4 bg-white rounded"
      />

      <div className="flex justify-between items-center mb-2">
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <a href="#" className="text-blue-400 text-sm">
          Forgot Password?
        </a>
      </div>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="bg-blue-500 mt-2"
      >
        Login
      </Button>

      <div className="flex justify-between mt-4">
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          className="flex-1 mx-1 text-white border-white"
        >
          Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          className="flex-1 mx-1 text-white border-white"
        >
          Facebook
        </Button>
      </div>

      <p className="text-center text-sm mt-4">
        Don't have an account?{" "}
        <span
          onClick={onSignupClick}
          className="text-blue-400 hover:underline cursor-pointer"
        >
        Signup
        </span>
        
      </p>
    </div>
  );
}
  */

// src/LoginForm.jsx
import React from "react";
import { TextField, Button } from "@mui/material";

export default function Login({ onSignupClick }) {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('\login-bg.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-xl w-full max-w-sm shadow-lg text-white">
        <h2 className="text-xl font-bold text-center mb-4 text-orange-400">
          Login Here
        </h2>
        <TextField
          label="Enter Email Here"
          variant="filled"
          fullWidth
          className="mb-4"
          InputProps={{ style: { backgroundColor: "white" } }}
        />
        <TextField
          label="Enter Password Here"
          type="password"
          variant="filled"
          fullWidth
          className="mb-4"
          InputProps={{ style: { backgroundColor: "white" } }}
        />
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
            onClick={onSignupClick}
          >
            Sign up
          </span>{" "}
          here
        </p>
      </div>
    </div>
  );
}
