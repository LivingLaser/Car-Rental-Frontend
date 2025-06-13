import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Modal } from '@mui/material';
import Pages from './Pages';
import { getUserBookings, updateBooking } from '../services/bookingService';
import userContext from '../auth/userContext';
import { CAR_IMAGE_RESOURCE } from '../services/carService';
import { toast } from 'react-toastify';

export default function Booking() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => setOpen(id);
  const handleClose = () => setOpen(null);
  const userData = useContext(userContext);
  const [bookingDetail, setBookingDetail] = useState({});

  useEffect(() => {
    getUserBookings(userData.user.userId, 0).then((response) => {
      setBookingDetail(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const changePage = (pageNubmer) => {
    getUserBookings(userData.user.userId, pageNubmer).then((response) => {
      setBookingDetail(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  const cancelBooking = (bookingId) => {
    updateBooking(bookingId, "Canceled").then((resp) => {
      toast.info("Booking Canceled for ID: " + resp.bookingId);
      getUserBookings(userData.user.userId, bookingDetail?.pageNubmer).then((response) => {
        setBookingDetail(response);
      }).catch((error) => {
        console.log(error);
      });
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
        Booking Details
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
              <TableCell align="center"><strong>Model</strong></TableCell>
              <TableCell align="center"><strong>Booking Date & Time</strong></TableCell>
              <TableCell align="center"><strong>Pickup Date</strong></TableCell>
              <TableCell align="center"><strong>Drop-off Date</strong></TableCell>
              <TableCell align="center"><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingDetail?.pageContent?.map((booking) => (
              <TableRow key={booking.bookingId}>
                <TableCell align="center">{booking?.car?.modelName}</TableCell>
                <TableCell align="center">{new Date(booking.bookingDateTime).toLocaleString()}</TableCell>
                <TableCell align="center">{new Date(booking.pickDate).toLocaleDateString()}</TableCell>
                <TableCell align="center">{new Date(booking.dropDate).toLocaleDateString()}</TableCell>
                <TableCell align="center">{booking.bookingStatus}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" size="small" onClick={() => handleOpen(booking.bookingId)}>View</Button>
                    {(booking.bookingStatus === "Pending") && <Button variant="outlined" size="small" color="error" onClick={() => cancelBooking(booking.bookingId)}>Cancel</Button>}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* External Pagination */}
      <Pages pageCount={bookingDetail?.totalPages} onPageChange={changePage} />

      {/* Modal */}
      {bookingDetail?.pageContent?.map((booking) => (
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
                  <li>Pickup Date - {new Date(booking.pickDate).toLocaleString()}</li>
                  <li>Pickup Location - {booking.pickLocation}</li>
                  <li>Drop-off Date - {new Date(booking.dropDate).toLocaleString()}</li>
                  <li>Drop-off Location - {booking.dropLocation}</li>
                  <li>Amount - Rs. {booking.amount}</li>
                  <li>Booking Status - {booking.bookingStatus}</li>
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight="bold">Car Details:</Typography>
                <Typography component="ul">
                  <li>Registration Number - {booking?.carVariant?.registration}</li>
                  <li>Insurance Validity - {new Date(booking?.carVariant?.insuranceValidity).toLocaleDateString()}</li>
                  <li>PUC Validity - {new Date(booking?.carVariant?.pucValidity).toLocaleDateString()}</li>
                  <li>Color - {booking?.carVariant?.modelColor}</li>
                </Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Button onClick={handleClose} variant="contained">Close</Button>
            </Box>
          </Box>
        </Modal>
      ))}
    </Box>
  );
}
