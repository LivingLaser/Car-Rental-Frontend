import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Box, Typography } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalSharpIcon from '@mui/icons-material/AirlineSeatReclineNormalSharp';
import LuggageIcon from '@mui/icons-material/Luggage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function CardInfo({car}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1), // Reduced padding
    boxShadow: 'none',
    textAlign: 'center',
    borderRadius: 0,
    fontSize: '1rem',
    color: theme.palette.text.primary,
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Arrange items vertically
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        gap: 1, // Reduced gap between the items
        padding: 1, // Reduced padding around the Box
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '48%', md: '100%' },
        }}
      >
        {/* Top Icons */}
        <Item>
          <Box sx={{ display: 'flex', gap: 5 }}>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 1,
                borderRadius: 0,
                backgroundColor: '#fff',

              }}
            >
              <SpeedIcon color="Black" fontSize="medium" />
              <Typography variant="body2">{car.mileage}&nbsp;KM</Typography>
            </Box>


            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 1,
                borderRadius: 0,
                backgroundColor: '#fff',

              }}
            >
              <LocalGasStationIcon color="Black" fontSize="medium" />
              <Typography variant="body2">{car.fuelType}</Typography>
            </Box>
          </Box>
        </Item>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', sm: '48%', md: '93%' },
        }}
      >
        {/* Bottom Icons */}
        <Item>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRadius: 0,
                backgroundColor: '#fff',
                boxShadow: 0,
              }}
            >
              <AirlineSeatReclineNormalSharpIcon color="Black" fontSize="medium" />
              <Typography variant="body2">{car.seatCapacity}&nbsp;Seater</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 2,
                borderRadius: 0,
                backgroundColor: '#fff',

              }}
            >
              <LuggageIcon color="Black" fontSize="medium" />
              <Typography variant="body2">{car.fuelCapacity}&nbsp;{car.fuelUnit}</Typography>
            </Box>
          </Box>
        </Item>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderRadius: 0,
          backgroundColor: '#fff',
          boxShadow: 0,
        }}
      >
        <CurrencyRupeeIcon color="Black" fontSize="medium" />
        <Typography variant="body1" fontWeight="bold">{car.rentPrice} / hr</Typography>
      </Box>
    </Box>
  );
}
