import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Pages() {
  return (
    <Stack
      spacing={1}
      direction="row"
      justifyContent="center"
      sx={{
        width: '100%',
        position: 'inherit',
        top: '50%', 
        transform: 'translateY(-50%)', 
      }}
    >
      <Pagination count={10} color="primary" />
    </Stack>
  );
}
