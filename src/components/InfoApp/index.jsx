import * as React from "react";
import {
    Box,
    Button,
    Typography,
    Modal,
    Alert,
    AlertTitle,
} from "@mui/material/";
import InfoIcon from '@mui/icons-material/Info';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    boxShadow: 24
};

export const InfoApp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={handleOpen} startIcon={<InfoIcon />}>
                    Info
                </Button>
            </Box> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Alert severity="info">
                        <AlertTitle>Sobre a página</AlertTitle>
                        <Typography>
                            Selecione um estado, um município e visualize as informações da
                            microrregião, mesorregião, UF e região do município.
                        </Typography>
                    </Alert>
                </Box>
            </Modal>
        </div>
    );
}
