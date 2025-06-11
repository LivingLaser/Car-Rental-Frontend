import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Pagination, Stack } from "@mui/material";

const PageList = forwardRef((props, ref) => {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        props.onPageChange(value-1);
    }

    useImperativeHandle(ref, () => ({
        updateState(newPage) {
            setPage(newPage);
        }
    }));

    return (
        <Stack
            spacing={1} direction="row" justifyContent="center"
            sx={{
                width: '100%',
                position: 'inherit',
                top: '50%',
                transform: 'translateY(-50%)'
            }}
        >
            <Pagination count={props.pageCount} page={page} onChange={handleChange} color="primary" />
        </Stack>
    );
});

export default PageList;