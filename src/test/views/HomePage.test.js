import { render, screen } from "@testing-library/react";
import HomePageView from "../../views/HomePage";
import { MemoryRouter } from "react-router-dom";
import React from "react";


test( 'renders home page link', () => {
    render( <HomePageView/>, { wrapper: MemoryRouter }  );
    const element = screen.getByText( /home page/i );

    expect( element ).toBeInTheDocument();
} );
