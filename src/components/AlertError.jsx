import React, { useState } from "react";
import { Stack, Alert } from "@mui/material";

export const AlertError = ({ hasError }) => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Stack sx={{ display: "flex", alignItems: "center", width: '100%', pt: 2 }}>
            <Alert variant="filled" severity="error" onClick={handleClick}>{hasError}</Alert>
        </Stack>
    )
}
