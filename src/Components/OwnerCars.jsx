import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import userContext from "../auth/userContext";
import { getVariantsByOwner, removeCarVariant } from "../services/carVariantService";
import { toast } from "react-toastify";

function OwnerCars() {
    const userData = useContext(userContext);
    const [variants, setVariants] = useState(null);

    useEffect(() => {
        getVariantsByOwner(userData.user.userId).then((response) => {
            setVariants(response);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const deleteVariant = (registration) => {
        removeCarVariant(registration).then((response) => {
            toast.success(response.message);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
                Your Registrations
            </Typography>

            <TableContainer
                component={Paper}
                sx={{
                    width: '100%',
                    maxWidth: '1500px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: 4,
                }}
            >
                <Table sx={{ minWidth: 650, backgroundColor: '#dce775' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>Registration</strong></TableCell>
                            <TableCell align="center"><strong>Insurance Validity</strong></TableCell>
                            <TableCell align="center"><strong>PUC Validity</strong></TableCell>
                            <TableCell align="center"><strong>Model Name</strong></TableCell>
                            <TableCell align="center"><strong>Model Color</strong></TableCell>
                            <TableCell align="center"><strong>Action</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {variants?.map((variant) => (
                            <TableRow key={variant.registration}>
                                <TableCell align="center">{variant.registration}</TableCell>
                                <TableCell align="center">{new Date(variant.insuranceValidity).toLocaleDateString}</TableCell>
                                <TableCell align="center">{new Date(variant.pucValidity).toLocaleDateString}</TableCell>
                                <TableCell align="center">{variant.car.modelName}</TableCell>
                                <TableCell align="center">{variant.modelColor}</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" size="small" color="error" onClick={() => deleteVariant(variant.registration)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default OwnerCars;