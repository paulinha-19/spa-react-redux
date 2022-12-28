import React, { useState } from "react";
import { Alert, Box, IconButton, Collapse, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const AlertApp = ({ content, textIcon, startIcon }) => {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
                <Alert
                    severity="info"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {content}
                </Alert>
            </Collapse>
            <Button
                startIcon={startIcon}
                disabled={open}
                onClick={() => {
                    setOpen(true);
                }}
            >
                {textIcon}
            </Button>
        </Box>
    )
}