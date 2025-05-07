import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Admin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center mx-1 my-1 rounded-2xl"
      style={{ backgroundImage: "url('/Admin-login1.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-96">
        <h2 style={{ color: 'white' }} className="text-2xl font-bold text-center mb-6">
          ADMIN LOGIN
        </h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
