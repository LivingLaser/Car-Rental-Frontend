import React, { useContext, useState } from 'react';
import { Box, Typography, CardContent, Link, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Alert } from '@mui/material';
import userContext from "../auth/userContext";
import { doLogout } from "../auth/authentication";
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../services/userService';
import { toast } from 'react-toastify';

export default function Password() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const userData = useContext(userContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleClose = () => {
    setOpen(false);
    setError("");
    setCredentials({
      password: "",
      newPassword: "",
      confirmPassword: ""
    });
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials({ ...credentials, [id]: value });
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (credentials.password.trim() == "" || (credentials.newPassword.trim() == "" && credentials.confirmPassword.trim() == "")) {
      setError("Fill all the fields");
      return;
    }else if (credentials.newPassword !== credentials.confirmPassword) {
      setError("New Password and Confirm New Password should match");
      return;
    }else if (credentials.newPassword.length < 6 || credentials.newPassword.length > 13) {
      setError("Password must be between 6-13 characters");
      return;
    }

    changePassword(userData.user.email, credentials.password, credentials.newPassword).then((response) => {
      setCredentials({
        password: "",
        newPassword: "",
        confirmPassword: ""
      });
      setError("");
      userData.setUser({});
      doLogout();
      toast.success("Login to your account again");
      navigate("/login");
    }).catch((error) => {
      setError(error.response.data.message);
    })
  }

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Settings
      </Typography>

      <Stack spacing={2}>
        {/* Profile Card */}

        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Link component="button" underline="hover" color="primary" onClick={handleOpen}>
            Change Password
          </Link >
          <Link component="button" underline="hover" color="error" onClick={() => {
            userData.setUser({});
            doLogout();
            navigate("/");
          }}>
            Logout
          </Link>
        </CardContent>
      </Stack>

      {/* Change Password Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <Box component="form" onSubmit={submitForm}>
          <DialogTitle>Change Password</DialogTitle><br />
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              label="Old Password" type="password" fullWidth
              id="password" value={credentials.password} onChange={handleChange}
            />
            <TextField
              label="New Password" type="password" fullWidth
              id="newPassword" value={credentials.newPassword} onChange={handleChange}
            />
            <TextField
              label="Confirm New Password" type="password" fullWidth
              id="confirmPassword" value={credentials.confirmPassword} onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">Change Password</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
