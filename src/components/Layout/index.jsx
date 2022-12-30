import React from 'react'
import { Box } from "@mui/material";

export const Layout = ({ children }) => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            flex: 1
        }}>
            {children}
        </Box>
    )
}



