import React from 'react';
import { Box, Container } from "@mui/material";
import { SelectState, SelectCity, InformationCity } from "../../features";

export const ContentApiSide = () => {
    return (
        <Container
            className='CONTAINER'
            sx={{
                backgroundColor: "#EDEDED",
                px: 0,
                py: 2
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <Box

                    sx={{
                        flex: "1 1 400px"
                    }}
                >
                    <Box

                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <SelectState />
                        <SelectCity />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: "1 1 400px"
                    }}
                >
                    <InformationCity />
                </Box>
            </Box>
        </Container>
    )
}
