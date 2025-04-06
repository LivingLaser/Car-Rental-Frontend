import React from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Signup() {
  return (
    <div className="w-full max-w-lg bg-gray-800 shadow-lg p-8">

      <div className="flex w-full max-w-lg h-auto bg-gray-800 shadow-lg">
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">SIGN UP</h2>
          <p className="text-gray-400 text-sm mb-5">Create your account to get started.</p>

          <TextField label="Name" variant="outlined" fullWidth className="mb-4 bg-white rounded" />
          <TextField label="Email" variant="outlined" fullWidth className="mb-4 bg-white rounded" />
          <TextField label="Password" type="password" variant="outlined" fullWidth className="mb-4 bg-white rounded" />
          <TextField label="Confirm Password" type="password" variant="outlined" fullWidth className="mb-4 bg-white rounded" />

          <FormControlLabel control={<Checkbox />} label="I agree to the Terms and Conditions" className="text-white mb-3" />

          <Button variant="contained" color="primary" fullWidth className="bg-blue-500 mt-2">Sign Up</Button>

          <div className="flex justify-between mt-4">
            <Button variant="outlined" startIcon={<GoogleIcon />} className="flex-1 mx-1 text-white border-white">Google</Button>
            <Button variant="outlined" startIcon={<FacebookIcon />} className="flex-1 mx-1 text-white border-white">Facebook</Button>
          </div>

          <p className="text-center text-sm mt-3">Already have an account? <a href="#" className="text-blue-400">Log in</a></p>
        </div>
      </div>
    </div>
  );
}
