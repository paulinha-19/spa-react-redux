import { createTheme, responsiveFontSizes } from '@mui/material';

let themeSystem = createTheme({
    palette: {
        primary: {
            light: "#e2ab8e",
            main: "#da7640",
            dark: "#441e0a",
            contrastText: "#fff"
        },
        secondary: {
            light: "#fff",
            main: "#EDEDED",
            dark: "#2b2929",
            contrastText: "#000"
        },
        background: {
            paper: "#fff"
        }
    },
});

themeSystem = responsiveFontSizes(themeSystem);

export default themeSystem;
