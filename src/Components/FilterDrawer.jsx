import React, { useState } from 'react';
import { Box, Typography, Button, Drawer, IconButton, TextField, Slider, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function FilterDrawer() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => setDrawerOpen(open);

    return (
        <div>
            {/* Menu Button — hidden when drawer is open */}
            {!drawerOpen && (
                <IconButton
                    onClick={toggleDrawer(true)}
                    sx={{
                        position: 'absolute',
                        top: 90,
                        left: 20,
                        zIndex: 1300,
                        backgroundColor: '#fff',
                        boxShadow: 2,
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                variant="temporary"
            >
                <Box sx={{ width: 280, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <IconButton onClick={toggleDrawer(false)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Box>

                    <Typography variant="h6" gutterBottom>

                    </Typography>

                    <TextField fullWidth label="Search cars" variant="outlined" sx={{ mb: 3 }} />
                    <Button variant="outlined" href="#outlined-buttons">scearch</Button>


                    <Divider sx={{ my: 2 }} />

                    <Typography gutterBottom>Price (per hour)</Typography>
                    <Slider
                        defaultValue={100}
                        min={50}
                        max={1000}
                        step={50}
                        valueLabelDisplay="auto"
                        sx={{ mb: 3 }}
                    />

                    <Typography gutterBottom>Milage (per hour)</Typography>
                    <Slider
                        defaultValue={100}
                        min={50}
                        max={120}
                        step={5}
                        valueLabelDisplay="auto"
                        sx={{ mb: 3 }}

                    />

                    <Typography gutterBottom>Seating Capacity</Typography>
                    <Slider
                        defaultValue={4}
                        min={2}
                        max={8}
                        step={1}
                        valueLabelDisplay="auto"
                    />

                    <Typography gutterBottom> Boot Space (Liter)</Typography>
                    <Slider
                        defaultValue={100}
                        min={50}
                        max={1000}
                        step={50}
                        valueLabelDisplay="auto"
                        sx={{ mb: 3 }}
                    />
                    <Button variant="outlined" href="#outlined-buttons">Filter</Button>
                </Box>
            </Drawer>
        </div>
    );
}