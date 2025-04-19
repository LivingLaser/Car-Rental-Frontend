import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { color } from 'framer-motion';

const Employee = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex items-center justify-center flex-col items-center justify-start min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/employee.jpg')" }}
    >
      <div className="bg-black-500 bg-opacity-60 p-8 rounded-lg shadow-lg w-96" style={{ marginRight: '500px' }}>
        <h2 style={{color: 'white'}} className="text-2xl font-bold text-center mb-6">{isLogin ? 'EMPLOYEE LOGIN' : 'EMPLOYEE SIGN-UP'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
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
          )}
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
            {isLogin ? 'Login' : 'Signup'}
          </Button>
        </form>
        <p className="mt-4 text-center text-white">
          {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Employee;