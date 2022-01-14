import React from "react";
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'


import LinkCH from "../../../components/LinkCH/LinkCH";


test( 'LinkCH render and hover', () => {
    render( <LinkCH page="/items">Items page</LinkCH>, { wrapper: MemoryRouter } );

    let LinkElement = screen.getByText( /items/i );

    // Before hover
    expect( LinkElement ).toBeInTheDocument();
    expect( LinkElement.classList ).toEqual( expect.objectContaining( [ 'normal' ] ) );
    expect( LinkElement.classList ).toEqual( expect.not.objectContaining( [ 'hovered' ] ) );

    // Simulate hover.
    userEvent.hover( LinkElement );

    // After hover
    expect( LinkElement.classList ).toEqual( expect.not.objectContaining( [ 'normal' ] ) );
    expect( LinkElement.classList ).toEqual( expect.objectContaining( [ 'hovered' ] ) );

    // Simulate un-hover.
    userEvent.unhover( LinkElement );

    // After un-hover
    expect( LinkElement.classList ).toEqual( expect.objectContaining( [ 'normal' ] ) );
    expect( LinkElement.classList ).toEqual( expect.not.objectContaining( [ 'hovered' ] ) );

} );
