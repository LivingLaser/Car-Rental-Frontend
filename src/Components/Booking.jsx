import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Stack, Modal } from '@mui/material';
import Pages from './Pages';

export default function Booking() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = Array(12).fill(createData('Gingerbread', 356, 16.0, 49, 3.9)).map((row, i) => ({
    ...row,
    name: `${row.name} ${i + 1}`
  }));

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

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
              <TableCell><strong>Dessert (100g serving)</strong></TableCell>
              <TableCell align="right"><strong>Calories</strong></TableCell>
              <TableCell align="right"><strong>Fat&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>Carbs&nbsp;(g)</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button variant="outlined" size="small" onClick={() => handleOpen(row)}>View</Button>
                    <Button variant="outlined" size="small" color="error" onClick={() => alert('Cancelled')}>Cancel</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* External Pagination */}
      <Pages />

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Car Rental Details</Typography>

          <Box display="flex" gap={4} mb={3} flexWrap="wrap">
            <Box
              component="img"
              src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg"
              alt="Car"
              sx={{ width: 300, height: 200, borderRadius: 1, objectFit: 'cover' }}
            />
            <Box>
              <Typography fontWeight="bold">Model Description:</Typography>
              <Typography component="ul">
                <li>Model Name - Audi</li>
                <li>Mileage - 60 kmpl</li>
                <li>Engine - 1000CC</li>
                <li>Transmission - Manual</li>
                <li>Seat Capacity - 4</li>
                <li>Bootspace - 1000 li</li>
                <li>Fuel Type - Petrol</li>
                <li>Fuel Capacity - 1000 li</li>
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={8} mb={3} flexWrap="wrap">
            <Box>
              <Typography fontWeight="bold">Booking Details</Typography>
              <Typography component="ul">
                <li>Booking Date & Time - 1/1/2025 12:00</li>
                <li>Pickup Location - Kolkata</li>
                <li>Drop Location - Howrah</li>
                <li>Pickup Date - 1/1/2025</li>
                <li>Drop Date - 2/1/2025</li>
                <li>Amount - Rs 1200</li>
                <li>Booking Status - Pending</li>
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight="bold">Car Details:</Typography>
              <Typography component="ul">
                <li>Registration Number - ABC X12 345</li>
                <li>Insurance Validity - 1/1/2027</li>
                <li>PUC Validity - 1/1/2027</li>
                <li>Color - Red</li>
              </Typography>
            </Box>
          </Box>

          <Box textAlign="right">
            <Button onClick={handleClose} variant="contained">Close</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
