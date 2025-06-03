import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CardInfo from './CardInfo';
import { CAR_IMAGE_RESOURCE } from '../services/carService';

export default function CardCom({car}) {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCardClick = () => {
        // Pass car details to the /rent page
        navigate('/rent2', {
            state: {
                car: {
                    name: car.name,
                    mileage: car.mileage,
                    fuelType: car.fuelType,
                    seatCapacity: car.seatCapacity,
                    fuelCapacity: car.fuelCapacity,
                    fuelUnit: car.fuelUnit,
                    rentPrice: car.rentPrice,
                    image: CAR_IMAGE_RESOURCE + car.modelImage,
                },
            },
        });
    };

    return (
        <Card
            sx={{
                width: 350,
                transition: '0.3s',
                '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardActionArea onClick={handleCardClick}> {/* Add onClick handler */}
                <CardMedia
                    component="img"
                    height="160"
                    image={CAR_IMAGE_RESOURCE + car.modelImage}
                    alt="Car Image"
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1,
                        textAlign: 'center',
                        py: 2,
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {car.modelName}
                    </Typography>

                    {/* Car Info Icons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                        <CardInfo car={car} />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}