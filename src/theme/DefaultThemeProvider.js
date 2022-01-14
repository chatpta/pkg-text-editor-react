import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import appTheme from "./appTheme";


function DefaultThemeProvider( props ) {
    return (
        <ThemeProvider theme={ appTheme }>
            { props.children }
        </ThemeProvider>
    );
}

export default DefaultThemeProvider;
