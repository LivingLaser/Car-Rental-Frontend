import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import CardInfo from './CardInfo';

export default function CardCom() {
    return (
        <Card
            sx={{
                width: 310,
                transition: '0.3s',
                '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/10655/1744284802118/front-left-side-47.jpg"
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
                        BMW
                    </Typography>

                    {/* Car Info Icons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                        <CardInfo
                            mileage="1200"
                            fuelType="Petrol"
                            seatCapacity="4"
                            fuelCapacity="100"
                            fuelUnit="L"
                            rentPrice="2000.00"
                        />
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}