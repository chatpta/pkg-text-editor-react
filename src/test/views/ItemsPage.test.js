import { render, screen } from "@testing-library/react";
import ItemPage from "../../views/ItemsPage";


test( 'Item page contains element', () => {
    render( <ItemPage/> );
    const element = screen.getByText( /items page/i );

    expect( element ).toBeInTheDocument();
} );
