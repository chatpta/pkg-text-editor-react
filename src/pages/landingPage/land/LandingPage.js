import React from 'react';
import { useEffect } from "react";

import useLandStyle from "./landStyle";
import StoreConnectUserReadOnly from "../../../store/storeConnectUserReadOnly";
import Copyright from "../../../components/Copyright/Copyright";
import CHEditorComponent from "../../../components/CHEditor/CHEditorComponent";


function LandingElement() {
    // const { user } = props;

    const classes = useLandStyle();

    useEffect( () => {
        }, []
    );

    return (
        <div className={ classes.container }>
            <CHEditorComponent/>

            <Copyright style={ { marginTop: "96px" } }/>
        </div>
    );
}

export default StoreConnectUserReadOnly( LandingElement );
