import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import { execPath } from 'process';

describe('The main app', () => {

  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocuments();
  });

  it('payments component should be in app component', () => {
    render(<App />);
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

});
