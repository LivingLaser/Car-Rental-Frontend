import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EmployeeSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/employee.jpg')" }}
    >
      <div className="bg-black-500 bg-opacity-60 p-8 rounded-lg min-h-screen shadow-lg w-96" style={{ marginRight: '500px' }}>
        <h2 style={{ color: 'white' }} className="text-2xl font-bold text-center mb-6">EMPLOYEE SIGN-UP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignup;
