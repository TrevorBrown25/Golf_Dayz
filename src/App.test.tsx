import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders golf dayz on the homepage', () => {
  render(<App />);
  const heading = screen.getByText(/golf dayz/i);
  expect(heading).toBeInTheDocument();
});
