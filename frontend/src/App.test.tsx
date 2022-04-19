import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import { execPath } from 'process';

describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('payments component should be in app component', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('should render the Home link', () => {
    render(<App />);
    // expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: "Home" })).toBeInTheDocument();
  });

  it('should render the Home header', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

});
