import React, { useState } from "react";
import { Link } from "react-router-dom";

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};


const LinkCH = ( { page, children } ) => {
    const [ status, setStatus ] = useState( STATUS.NORMAL );

    const onMouseEnter = () => {
        setStatus( STATUS.HOVERED );
    };

    const onMouseLeave = () => {
        setStatus( STATUS.NORMAL );
    };

    return (
        <Link
            className={ status }
            to={ page || '#' }
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
        >
            { children }
        </Link>
    );
};

export default LinkCH;
