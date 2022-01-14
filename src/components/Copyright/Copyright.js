import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import * as React from "react";

export default function Copyright( props ) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" { ...props }>
            { 'Copyright © ' }
            <Link to={ "/" } style={ { textDecoration: 'none', color: "black" } }>
                Chatpta.ca
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    );
}
