import React, { useContext, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import userContext from '../auth/userContext';
import { loginAdmin } from '../services/userService';
import { doLogin } from '../auth/authentication';
import { toast } from 'react-toastify';

const Admin = () => {
  const navigate = useNavigate();
  const userData = useContext(userContext);
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const {id, value} = event.target;
    setLoginDetail({...loginDetail, [id]: value});
  };

  const submitForm = (event) => {
    event.preventDefault();

    if(loginDetail.email.trim()=="" || loginDetail.password.trim()=="") {
      toast.error("Username and Password is required");
      return;
    }

    loginAdmin(loginDetail).then((response) => {
      setLoginDetail({
        email: "",
        password: ""
      });
      doLogin(response);
      userData.setUser(response);
      toast.success("Welcome " + response.name);
      navigate("/dashadmin");
    }).catch((error) => {
      toast.error(error.response.data.message);
    })
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
        <Box component="form" onSubmit={submitForm}>
          <div className="mb-4">
            <TextField
              label="Username" fullWidth
              id="email" value={loginDetail.email} onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password" type="password" fullWidth
              id="password" value={loginDetail.password} onChange={handleChange}
              InputLabelProps={{ style: { color: 'white' } }}
              InputProps={{ style: { color: 'white' } }}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
