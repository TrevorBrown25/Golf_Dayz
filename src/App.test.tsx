import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders golf dayz on the homepage', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /golf dayz fantasy league/i
  });
  expect(heading).toBeInTheDocument();
});
