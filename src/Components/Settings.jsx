import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Settings() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
       My Profile      </Typography>

      <Stack spacing={2}>
        {/* Profile Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Name</Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <Typography>No name added</Typography>
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
              <Typography color="text.secondary" mt={1}>No Email Address to show</Typography>
            </Box>
          </CardContent>
        </Card>
   

       {/* Address Book Card */}
       <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Phone  </Typography>
              <Typography color="text.secondary" mt={1}>No Address Added</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Address Book Card */}
        <Card variant="outlined">
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Address </Typography>
              <Typography color="text.secondary" mt={1}>No Address Added</Typography>
            </Box>
          </CardContent>
        </Card>

        </Stack>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose } fullWidth={true}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}> <br />
          <TextField label="Name" fullWidth />
          <input type='hidden'/>
          <TextField label="Phone Number" fullWidth />
          <TextField label="Address" fullWidth />
          <TextField label="Pincode" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
