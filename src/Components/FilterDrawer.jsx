import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Drawer, IconButton, TextField, Slider, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getFilterValues } from '../services/carService';

export default function FilterDrawer(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const [values, setValues] = useState({});

    useEffect(() => {
        getFilterValues().then((response) => {
            setValues(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [keyword, setKeyword] = useState("");
    const [filter, setFilter] = useState({
        price: values?.maxRentPrice,
        mileage: values?.maxMileage,
        seatCapacity: values?.maxSeatCapacity,
        bootSpace: values?.maxBootSpace
    });

    const handleSearch = (event) => {
        const search = event.target.value;
        setKeyword(search);
    }

    const handleFilter = (event, value) => {
        const name = event.target.name;
        setFilter({ ...filter, [name]: value });
    }

    const submitSearch = (event) => {
        event.preventDefault();
        props.onSearch(keyword);
    }

    const submitFilter = (event) => {
        event.preventDefault();
        props.onFilter(filter);
    }

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

                    <Box component="form" onSubmit={submitSearch}>
                        <TextField
                            label="Search Cars" variant="outlined" fullWidth required
                            id="keyword" value={keyword} onChange={handleSearch}
                            sx={{ mb: 3 }}
                        />
                        <Button type="submit" variant="outlined">Search</Button>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box component="form" onSubmit={submitFilter}>
                        <Typography gutterBottom>Price (per hour)</Typography>
                        <Slider
                            min={values?.minRentPrice} max={values?.maxRentPrice} valueLabelDisplay="auto"
                            name="price" value={filter.price} onChange={handleFilter}
                            sx={{ mb: 3 }}
                        />

                        <Typography gutterBottom>Milage (per hour)</Typography>
                        <Slider
                            min={values?.minMileage} max={values?.maxMileage} valueLabelDisplay="auto"
                            name="mileage" value={filter.mileage} onChange={handleFilter}
                            sx={{ mb: 3 }}

                        />

                        <Typography gutterBottom>Seating Capacity</Typography>
                        <Slider
                            min={values?.minSeatCapacity} max={values?.maxSeatCapacity} valueLabelDisplay="auto"
                            name="seatCapacity" value={filter.seatCapacity} onChange={handleFilter}
                        />

                        <Typography gutterBottom> Boot Space (Liter)</Typography>
                        <Slider
                            min={values?.minBootSpace} max={values?.maxBootSpace} valueLabelDisplay="auto"
                            name="bootSpace" value={filter.bootSpace} onChange={handleFilter}
                            sx={{ mb: 3 }}
                        />
                        <Button type="submit" variant="outlined">Filter</Button>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}