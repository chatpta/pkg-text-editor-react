import React from 'react';
import { useEffect } from "react";

import useLandStyle from "./landStyle";
import StoreConnectUserReadOnly from "../../../store/storeConnectUserReadOnly";
import Copyright from "../../../components/Copyright/Copyright";
import EditorComponentCh from "../../../components/EditorCh/EditorComponentCh";


function LandingElement() {
    // const { user } = props;

    const classes = useLandStyle();

    useEffect( () => {
        }, []
    );

    return (
        <div className={ classes.container }>
            <EditorComponentCh/>

            <Copyright style={ { marginTop: "96px" } }/>
        </div>
    );
}

export default StoreConnectUserReadOnly( LandingElement );
