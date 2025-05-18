import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Pages from './Pages';
import CardCom from './CardCom';
import FilterDrawer from './FilterDrawer';
import { getAllCars } from '../services/carService';

// 🔹 Main Layout
export default function Explore() {
  const [carDetail, setCarDetail] = useState({});

  useEffect(() => {
    getAllCars(0).then((response) => {
      setCarDetail(response);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

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
        
        {carDetail?.pageContent?.map((car) => (
          <CardCom key={car.modelId} car={car} />
        ))}
        
        <Pages />
      </Box>
    </>
  );
}
