import { render, screen } from "@testing-library/react";
import NotFoundPageView from "../../views/NotFoundPage";


test( 'NotFound page contains element', () => {
    render( <NotFoundPageView/> );
    const element = screen.getByText( /not found 404/i );

    expect( element ).toBeInTheDocument();
} );
