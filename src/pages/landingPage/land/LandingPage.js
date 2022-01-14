import React from 'react';
import { useEffect } from "react";
import Button from '@mui/material/Button';

import useLandStyle from "./landStyle";
import StoreConnectUserReadOnly from "../../../store/storeConnectUserReadOnly";
import Copyright from "../../../components/Copyright/Copyright";


function LandingElement() {
    // const { user } = props;

    const classes = useLandStyle();

    useEffect( () => {
        }, []
    );

    return (
        <div className={ classes.container }>
            <h1>CHATPTA</h1>
            <h2>Canada's own Asian store</h2>
            <h3>Coming soon...</h3>

            <Button variant="outlined" size="large" className={ classes.button }>
                Job openings
            </Button>

            <Copyright style={ { marginTop: "96px" } }/>
        </div>
    );
}

export default StoreConnectUserReadOnly( LandingElement );
