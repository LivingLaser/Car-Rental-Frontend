import React from 'react';
import { Box } from '@mui/material';
import Pages from './Pages';
import CardCom from './CardCom';
import FilterDrawer from './FilterDrawer';

// 🔹 Main Layout
export default function Explore() {
  return (
    <>
      {/* Drawer */}
      <FilterDrawer/>

      {/* Card Layout */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'flex-start',
          gap: 6,
          p: 7,
          bgcolor: '#f1f8e9',
          borderRadius: '16px',
          margin: '5px 5px 5px 5px',
        }}
      >
        
        {Array.from({ length: 15 }).map((_, index) => (
          <CardCom key={index} />
        ))}
        
        <Pages />
      </Box>
    </>
  );
}
