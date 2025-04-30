import React, { useState } from 'react';
import {
  Box,
  Typography,
  CardContent,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert
} from '@mui/material';


export default function Password() {
  const [open, setOpen] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleOpen = () => {
    setError('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePassword = () => {
    // Simple password match check
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    // TODO: Submit the form or call an API here

    console.log('Old:', oldPassword);
    console.log('New:', newPassword);

    setOpen(false); // Close modal after success
  };

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
             <Link component="button" underline="hover" color="error"  >    Log out
             </Link>
          </CardContent>
          

          
      </Stack>

      {/* Change Password Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Change Password</DialogTitle><br />
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Old Password"
            type="password"
            fullWidth
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label="Confirm New Password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleChangePassword}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
