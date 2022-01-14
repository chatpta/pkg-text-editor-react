import { createTheme } from '@mui/material/styles';


import { blueGrey, deepOrange, orange, green } from "@mui/material/colors";

const appTheme = createTheme( {
    palette: {
        primary: { main: blueGrey[ 900 ] },
        secondary: { main: deepOrange[ 500 ] },
        emphasis: { main: orange[ 500 ] },
        cool: { main: green[ 700 ] },
        background: {
            main: "#faecd9",
            default: "#faecd9",
        },
        color: { main: "#222222" }
    },
    dimensions: {
        borderRadius: "6px",
        fullWidth: "1200px",
        mediumWidth: "900px",
        smallWidth: "600px",
        topBarHeight: 70,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { height: 56 }
            }
        }
    }
} );

export default appTheme;
