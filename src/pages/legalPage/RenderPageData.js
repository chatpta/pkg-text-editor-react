import React from "react";

export class RenderPageData {
    constructor( json ) {
        this.json = json
    }

    createHTMLText() {
        const textArray = this.json.data;
        return (
            textArray.map( ( element, index ) => {
                switch ( element.htmlElement ) {
                    case "p":
                        return ( <p key={ index }>{ element.content }</p> );
                    case "h2":
                        return ( <h2 key={ index }>{ element.content }</h2> );
                    case "h4":
                        return ( <h4 key={ index }>{ element.content }</h4> );
                    case "h5":
                        return ( <h5 key={ index }>{ element.content }</h5> );
                    default:
                        return "";
                }
            } )
        );
    }

}
