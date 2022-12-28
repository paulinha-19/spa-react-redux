import { Box, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

const style = {
    fontSize: 30,
    marginLeft: 0.5,
}

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
            Paula Soares.
        </Typography>
    );
}

export const Footer = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: "#EDEDED", widht: "100%", textAlign: "center" }}>
                <Typography sx={{ pt: 2, pb: 2, fontWeight: "600" }}>
                    API-IBGE
                </Typography>
                <Link href='https://github.com/paulinha-19/sobre-mim' target="_blank">
                    <GitHubIcon sx={style} />
                </Link>
                <Link href='https://www.linkedin.com/in/paulaso/' target="_blank" >
                    <LinkedInIcon sx={style} />
                </Link>
                <hr />
                <Copyright sx={{ pb: 2 }} />
            </Box>
        </footer>
    )
}
