import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signupEmployee } from '../services/userService';
import { toast } from 'react-toastify';

const EmpSignup = () => {
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
  };

  const submitForm = (event) => {
    event.preventDefault();
    signupEmployee(signupDetail).then((response) => {
      setSignupDetail({
        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        password: ""
      });
      setErrors({});
      toast.success("Employee Registered...");
      navigate("/dashadmin");
    }).catch((error) => {
      setErrors(error);
    })
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center mx-1 my-1 rounded-2xl"
      style={{ backgroundImage: "url('/employee.jpg')" }}
    >
      <div className="bg-black-500 bg-opacity-60 p-8 rounded-lg min-h-screen shadow-lg w-96" style={{ marginRight: '500px' }}>
        <h2 style={{ color: 'white' }} className="text-2xl font-bold text-center mb-6">OWNER SIGN-UP</h2>
        <Box component="form" onSubmit={submitForm}>
          <div className="mb-4">
            <TextField
              label="Name" fullWidth
              id="name" value={signupDetail.name} onChange={handleChange}
              error={errors?.response?.data?.name ? true : false}
              helperText={errors?.response?.data?.name}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Email" type="email" fullWidth
              id="email" value={signupDetail.email} onChange={handleChange}
              error={errors?.response?.data?.email ? true : false}
              helperText={errors?.response?.data?.email}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Phone" fullWidth
              id="phone" value={signupDetail.phone} onChange={handleChange}
              error={errors?.response?.data?.phone ? true : false}
              helperText={errors?.response?.data?.phone}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Address" fullWidth
              id="address" value={signupDetail.address} onChange={handleChange}
              error={errors?.response?.data?.address ? true : false}
              helperText={errors?.response?.data?.address}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Pincode" fullWidth
              id="pincode" value={signupDetail.pincode} onChange={handleChange}
              error={errors?.response?.data?.pincode ? true : false}
              helperText={errors?.response?.data?.pincode}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password" type="password" fullWidth
              id="password" value={signupDetail.password} onChange={handleChange}
              error={errors?.response?.data?.password ? true : false}
              helperText={errors?.response?.data?.password}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EmpSignup;
