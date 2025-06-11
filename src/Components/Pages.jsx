import React, { useState } from 'react';
import { Box, Pagination, Stack } from '@mui/material';

export default function Pages(props) {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    props.onPageChange(value-1);
  }

  return (
    <Box sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination count={props.pageCount} page={page} onChange={handleChange} color="primary" />
      </Stack>
    </Box>
  );
}
