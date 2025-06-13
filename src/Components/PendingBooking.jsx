import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Modal, Snackbar, Select, MenuItem } from '@mui/material';
import { confirmBooking, getBookingsByStatus, updateBooking } from '../services/bookingService';
import { CAR_IMAGE_RESOURCE } from '../services/carService';
import { clearCarVariants, getActiveVariants } from '../services/carVariantService';
import { toast } from 'react-toastify';

export default function PendingBooking() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(id);
  const handleClose = () => setOpen(null);
  const [bookingDetail, setBookingDetail] = useState(null);
  const [registrations, setRegistrations] = useState(null);
  const [bookingId, setBookingId] = useState("");
  const [registration, setRegistration] = useState("");
  const [opens, setOpens] = useState(false);

  useEffect(() => {
    getBookingsByStatus("Pending").then((response) => {
      setBookingDetail(response);
      clearCarVariants().then((resp) => {}).catch((error) => console.log(error));
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handlesOpen = (bookingId, modelId) => {
    getActiveVariants(modelId).then((response) => {
      setRegistrations(response);
      setBookingId(bookingId);
      setOpens(true);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handlesClose = () => {
    setOpens(false);
    setRegistrations(null);
    setBookingId("");
    setRegistration("");
  }

  const approveBooking = (bookingId, registration) => {
    confirmBooking(bookingId, registration).then((response) => {
      toast.success("Booking Approved");
      setOpens(false);
      setRegistrations(null);
      setBookingId("");
      setRegistration("");
      const newBookingDetail = bookingDetail?.filter((booking) => booking.bookingId != bookingId);
      setBookingDetail([...newBookingDetail]);
    }).catch((error) => {
      console.log(error);
    });
  }

  const declineBooking = (bookingId) => {
    updateBooking(bookingId, "Declined").then((response) => {
      toast.info("Booking Declined");
      const newBookingDetail = bookingDetail?.filter((booking) => booking.bookingId != bookingId);
      setBookingDetail([...newBookingDetail]);
    }).catch((error) => {
      console.log(error);
    });
  }

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#9ccc65',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  return (
    <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        Pending Bookings
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 4,
        }}
      >
        <Table sx={{ minWidth: 650, backgroundColor: '#dce775' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>Booking Date & Time</strong></TableCell>
              <TableCell align="center"><strong>User Name</strong></TableCell>
              <TableCell align="center"><strong>User Email</strong></TableCell>
              <TableCell align="center"><strong>Model</strong></TableCell>
              <TableCell align="center"><strong>Amount</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingDetail?.map((booking) => (
              <TableRow key={booking.bookingId}>
                <TableCell align="center">{new Date(booking.bookingDateTime).toLocaleString()}</TableCell>
                <TableCell align="center">{booking?.user?.name}</TableCell>
                <TableCell align="center">{booking?.user?.email}</TableCell>
                <TableCell align="center">{booking?.car?.modelName}</TableCell>
                <TableCell align="center">{booking.amount}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="outlined" size="small" onClick={() => handleOpen(booking.bookingId)}>View</Button>
                    <Button variant="contained" size="small" color="success" onClick={() => handlesOpen(booking.bookingId, booking?.car?.modelId)}>Approve</Button>
                    <Button variant="outlined" size="small" color="error" onClick={() => declineBooking(booking.bookingId)}>Decline</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* View Modal */}
      {bookingDetail?.map((booking) => (
        <Modal key={booking.bookingId} open={booking.bookingId === open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6" gutterBottom>Car Rental Details</Typography>
            <Box display="flex" gap={4} mb={3} flexWrap="wrap">
              <Box
                component="img"
                src={CAR_IMAGE_RESOURCE + booking?.car?.modelImage}
                alt="Car"
                sx={{ width: 300, height: 200, borderRadius: 1, objectFit: 'cover' }}
              />
              <Box>
                <Typography fontWeight="bold">Model Description:</Typography>
                <Typography component="ul">
                  <li>Model Name - {booking?.car?.modelName}</li>
                  <li>Mileage - {booking?.car?.mileage} km/{booking?.car?.fuelUnit}</li>
                  <li>Engine - {booking?.car?.engine} CC</li>
                  <li>Transmission - {booking?.car?.transmission}</li>
                  <li>Seat Capacity - {booking?.car?.seatCapacity}</li>
                  <li>Bootspace - {booking?.car?.bootSpace} L</li>
                  <li>Fuel Type - {booking?.car?.fuelType}</li>
                  <li>Fuel Capacity - {booking?.car?.fuelCapacity} {booking?.car?.fuelUnit}</li>
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={8} mb={3} flexWrap="wrap">
              <Box>
                <Typography fontWeight="bold">Booking Details</Typography>
                <Typography component="ul">
                  <li>Booking Date & Time - {new Date(booking.bookingDateTime).toLocaleString()}</li>
                  <li>Pickup Location - {booking.pickLocation}</li>
                  <li>Drop Location - {booking.dropLocation}</li>
                  <li>Pickup Date - {new Date(booking.pickDate).toLocaleString()}</li>
                  <li>Drop Date - {new Date(booking.dropDate).toLocaleString()}</li>
                  <li>Amount - Rs {booking.amount}</li>
                  <li>Booking Status - {booking.bookingStatus}</li>
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight="bold">Car Details:</Typography>
                <Typography component="ul">
                  <li>Registration Number - </li>
                  <li>Insurance Validity - </li>
                  <li>PUC Validity - </li>
                  <li>Color - </li>
                </Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Button onClick={handleClose} variant="contained">Close</Button>
            </Box>
          </Box>
        </Modal>
      ))}

      {/* Accept Modal */}
      <Modal open={opens} onClose={handlesClose}>
        <Box sx={{ ...modalStyle, width: 400, bgcolor: 'white' }}>
          <Box component="form" onSubmit={(event) => {
            event.preventDefault();
            approveBooking(bookingId, registration);
          }}>
            <Typography variant="h6" mb={2}>Select Registration</Typography>
            <Select
              fullWidth displayEmpty required
              id="registration" value={registration}
              onChange={(event) => setRegistration(event.target.value)}
            >
              <MenuItem value="" disabled>--Select--</MenuItem>
              {registrations?.map((variant) => (
                <MenuItem key={variant.registration} value={variant.registration}>
                  {variant.registration}
                </MenuItem>
              ))}
            </Select>

            <Stack direction="row" justifyContent="flex-end" spacing={2} mt={3}>
              <Button onClick={handlesClose} variant="outlined">Cancel</Button>
              <Button type="submit" variant="contained" color="success">Confirm</Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
