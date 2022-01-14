import { render, screen } from '@testing-library/react';
import App from '../../App/App';
import { MemoryRouter } from "react-router-dom";

test('renders home page link', () => {
  render(<App /> );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
