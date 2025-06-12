import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Modal,
  Snackbar,
  Select,
  MenuItem
} from '@mui/material';
import Pages from './Pages';

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

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein, status: 'Pending' };
}

const rowsData = Array(12).fill(null).map((_, i) =>
  createData(i + 1, `Gingerbread ${i + 1}`, 356, 16.0, 49, 3.9)
);

const drivers = ['John Doe', 'Jane Smith', 'Alex Johnson'];

export default function PendingBooking() {
  const [rows, setRows] = useState(rowsData);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [acceptTargetRow, setAcceptTargetRow] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState('');
  const [page, setPage] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const rowsPerPage = 10;
  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleViewOpen = (row) => {
    setSelectedRow(row);
    setViewModalOpen(true);
  };

  const handleViewClose = () => setViewModalOpen(false);

  const handleChangePage = (value) => setPage(value);

  const handleAcceptClick = (row) => {
    setAcceptTargetRow(row);
    setAcceptModalOpen(true);
  };

  const handleDecline = (row) => {
    updateRowStatus(row.id, 'Declined');
    showSnackbar(`Declined booking for ${row.name}`);
  };

  const handleConfirmAccept = () => {
    if (acceptTargetRow) {
      updateRowStatus(acceptTargetRow.id, 'Accepted');
      showSnackbar(`Accepted booking for ${acceptTargetRow.name} with driver ${selectedDriver}`);
      setAcceptModalOpen(false);
      setSelectedDriver('');
      setAcceptTargetRow(null);
    }
  };

  const updateRowStatus = (id, newStatus) => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
  };

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '' });
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
              <TableCell><strong>Dessert (100g serving)</strong></TableCell>
              <TableCell align="right"><strong>Calories</strong></TableCell>
              <TableCell align="right"><strong>Fat&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>Carbs&nbsp;(g)</strong></TableCell>
              <TableCell align="right"><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button variant="outlined" size="small" onClick={() => handleViewOpen(row)}>View</Button>
                    <Button variant="contained" size="small" color="success" onClick={() => handleAcceptClick(row)}>Accept</Button>
                    <Button variant="outlined" size="small" color="error" onClick={() => handleDecline(row)}>Decline</Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pages />

      {/* View Modal */}
      <Modal open={viewModalOpen} onClose={handleViewClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>Car Rental Details</Typography>
          {selectedRow && (
            <>
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
                    <li>Model Name - {selectedRow.name}</li>
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
                    <li>Booking Status - {selectedRow.status}</li>
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
                <Button onClick={handleViewClose} variant="contained">Close</Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>

      {/* Accept Modal */}
      <Modal open={acceptModalOpen} onClose={() => setAcceptModalOpen(false)}>
        <Box sx={{ ...modalStyle, width: 400, bgcolor: 'white' }}>
          <Typography variant="h6" mb={2}>Select Registration</Typography>
          <Select
            fullWidth
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            displayEmpty
          >
            <MenuItem value="" disabled>Select </MenuItem>
            {drivers.map((driver) => (
              <MenuItem key={driver} value={driver}>{driver}</MenuItem>
            ))}
          </Select>

          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={3}>
            <Button onClick={() => setAcceptModalOpen(false)} variant="outlined">Cancel</Button>
            <Button
              onClick={handleConfirmAccept}
              variant="contained"
              color="success"
              disabled={!selectedDriver}
            >
              Confirm
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbar.message}
      />
    </Box>
  );
}
