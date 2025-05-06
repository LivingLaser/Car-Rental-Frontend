import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function Pages() {
  return (
    <Box sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
    </Box>
  );
}
