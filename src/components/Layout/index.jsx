import React from 'react'
import { Box, Container } from "@mui/material"

export const Layout = ({ children }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", flex: 1 }}>
            <Container maxWidth="sm" >
                <Box maxWidth="sm" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    {children}
                </Box>
            </Container>
        </Box>

    )
}
