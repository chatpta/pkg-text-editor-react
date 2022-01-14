import React from "react";
import useLegalPageStyle from "./LegalPageStyle";
import { RenderPageData } from "./RenderPageData";

export default function LegalPage( props ) {
    const { textData } = props;
    document.title = textData.title;
    const html = new RenderPageData( textData );

    const classes = useLegalPageStyle();

    return (
        <div className={ classes.root }>
            <h2 className={ classes.headline }>{ textData.headline }</h2>
            { html.createHTMLText() }
        </div>
    );
}
