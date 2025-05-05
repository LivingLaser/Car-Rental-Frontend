import React, { useContext, useState } from 'react';
import { Box, Typography, Card, CardContent, Link, Stack, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import userContext from '../auth/userContext';
import { updateProfile } from '../services/userService';
import { doLogin } from '../auth/authentication';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userData = useContext(userContext);
  const [update, setUpdate] = useState({
    name: userData.user.name,
    email: userData.user.email,
    phone: userData.user.phone,
    address: userData.user.address,
    pincode: userData.user.pincode,
    password: "Car Rental"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUpdate({ ...update, [id]: value });
  }

  const submitForm = (event) => {
    event.preventDefault();
    updateProfile(update, userData.user.userId).then((response) => {
      setErrors({});
      toast.success("Profile details saved");
      handleClose();
      userData.setUser(response);
      doLogin(response);
    }).catch((error) => {
      setErrors(error);
    })
  }

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        My Profile
      </Typography>

      <Stack spacing={2}>
        {/* Profile Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Name</Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <Typography>{userData.user.name}</Typography>
              </Box>
            </Box>
            <Link component="button" underline="hover" color="primary" onClick={handleOpen}>
              Edit Profile
            </Link>
          </CardContent>
        </Card>

        {/*  Email ID Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Email Address</Typography>
              <Typography mt={1}>{userData.user.email}</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Address Book Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Phone</Typography>
              <Typography mt={1}>{userData.user.phone}</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Address Book Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Address</Typography>
              <Typography mt={1}>{userData.user.address} - {userData.user.pincode}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Stack>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <Box component="form" onSubmit={submitForm}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}> <br />
            <TextField label="Name" fullWidth
              id="name" value={update.name} onChange={handleChange}
              error={errors?.response?.data?.name ? true : false}
              helperText={errors?.response?.data?.name}
            />
            <TextField label="Phone No." fullWidth
              id="phone" value={update.phone} onChange={handleChange}
              error={errors?.response?.data?.phone ? true : false}
              helperText={errors?.response?.data?.phone}
            />
            <TextField label="Address" fullWidth
              id="address" value={update.address} onChange={handleChange}
              error={errors?.response?.data?.address ? true : false}
              helperText={errors?.response?.data?.address}
            />
            <TextField label="Pincode" fullWidth
              id="pincode" value={update.pincode} onChange={handleChange}
              error={errors?.response?.data?.pincode ? true : false}
              helperText={errors?.response?.data?.pincode}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit">Save</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
